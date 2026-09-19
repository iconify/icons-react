import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxgr81h8m.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxgr81h8m"/>`,
		"fallback": "fluent-mdl2:circle-fill",
	});
}

export default Component;
