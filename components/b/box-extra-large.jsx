import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lywu_-b-a.css';
import '../../css/j/j3_8dqerr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lywu_-b-a"/><path class="j3_8dqerr"/>`,
		"fallback": "carbon:box-extra-large",
	});
}

export default Component;
