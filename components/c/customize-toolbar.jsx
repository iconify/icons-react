import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umn6fwbni.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umn6fwbni"/>`,
		"fallback": "fluent-mdl2:customize-toolbar",
	});
}

export default Component;
