import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cs4j3qbaq.css';
import '../../css/v/vu0zlj5yr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="cs4j3qbaq"/><path class="vu0zlj5yr"/></g>`,
		"fallback": "glyphs:check-badge",
	});
}

export default Component;
