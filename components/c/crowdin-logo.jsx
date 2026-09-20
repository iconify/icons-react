import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/m4ph6li3r.css';
import '../../css/c/cf1vlob_u.css';
import '../../css/y/yvc8aobsv.css';
import '../../css/y/yaz0d-yvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="m4ph6li3r"/><path class="cf1vlob_u"/><path class="yvc8aobsv"/><path class="yaz0d-yvj"/></g>`,
		"fallback": "streamline-logos:crowdin-logo",
	});
}

export default Component;
