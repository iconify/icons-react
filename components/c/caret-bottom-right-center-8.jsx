import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsjtpacxr.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsjtpacxr"/>`,
		"fallback": "fluent-mdl2:caret-bottom-right-center-8",
	});
}

export default Component;
