import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lywu_-b-a.css';
import '../../css/s/sjm87yilc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lywu_-b-a"/><path class="sjm87yilc"/>`,
		"fallback": "carbon:box-medium",
	});
}

export default Component;
