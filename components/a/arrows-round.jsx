import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xxfnpsbla.css';
import '../../css/v/vill4i_zj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="xxfnpsbla"/><path class="vill4i_zj"/></g>`,
		"fallback": "glyphs:arrows-round",
	});
}

export default Component;
