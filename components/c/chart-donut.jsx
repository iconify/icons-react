import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/ino6mr9nn.css';
import '../../css/s/sn6br5b4i.css';
import '../../css/c/csubeabti.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ino6mr9nn"/><path class="sn6br5b4i"/><path class="csubeabti"/></g>`,
		"fallback": "glyphs:chart-donut",
	});
}

export default Component;
