import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azm_1muof.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azm_1muof"/>`,
		"fallback": "fa7-brands:blogger",
	});
}

export default Component;
