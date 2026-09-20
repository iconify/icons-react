import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/ohe-to2rg.css';
import '../../css/n/n2miaabah.css';
import '../../css/k/k085inbko.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ohe-to2rg"/><path class="n2miaabah"/><path class="k085inbko"/></g>`,
		"fallback": "streamline:database-check",
	});
}

export default Component;
