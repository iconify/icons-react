import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iqif41bmh.css';
import '../../css/d/dvg04bcea.css';
import '../../css/b/bl4zoxpll.css';
import '../../css/a/a2ynllugw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><rect class="iqif41bmh"/><rect class="dvg04bcea"/><rect class="bl4zoxpll"/><path class="a2ynllugw"/></g>`,
		"fallback": "reicon:chart-bar-trend-up-filled",
	});
}

export default Component;
