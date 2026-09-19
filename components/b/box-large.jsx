import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lywu_-b-a.css';
import '../../css/u/uzq_ldbqz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lywu_-b-a"/><path class="uzq_ldbqz"/>`,
		"fallback": "carbon:box-large",
	});
}

export default Component;
