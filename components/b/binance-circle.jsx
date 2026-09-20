import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/m3n0xtb4j.css';
import '../../css/r/r2th9g7qg.css';
import '../../css/e/ec-ooxbad.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="m3n0xtb4j"/><path class="r2th9g7qg"/><path class="ec-ooxbad"/></g>`,
		"fallback": "streamline:binance-circle",
	});
}

export default Component;
