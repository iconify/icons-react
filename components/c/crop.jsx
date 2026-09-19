import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/eaxi5hyrn.css';
import '../../css/t/th6mucbup.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="eaxi5hyrn"/><path class="th6mucbup"/></g>`,
		"fallback": "glyphs:crop",
	});
}

export default Component;
