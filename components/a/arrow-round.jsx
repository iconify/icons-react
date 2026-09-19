import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/oieh_xjfg.css';
import '../../css/o/orhoywdnf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="oieh_xjfg"/><path class="orhoywdnf"/></g>`,
		"fallback": "glyphs:arrow-round",
	});
}

export default Component;
