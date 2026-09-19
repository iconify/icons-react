import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbx_8bbhb.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbx_8bbhb"/>`,
		"fallback": "fluent-mdl2:collapse-content",
	});
}

export default Component;
