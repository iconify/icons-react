import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/e9bm3i9jh.css';
import '../../css/y/yg3x3ublv.css';
import '../../css/y/y_g8ifbsl.css';
import '../../css/u/u_i2j5blu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="e9bm3i9jh"/><circle class="yg3x3ublv"/><circle class="y_g8ifbsl"/><circle class="u_i2j5blu"/></g>`,
		"fallback": "icon-park-solid:anchor-round",
	});
}

export default Component;
