import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqiiqibzu.css';
import '../../css/a/awwwo0b-c.css';
import '../../css/h/h8y2zelcv.css';
import '../../css/i/iy524nh3x.css';
import '../../css/e/eppa5msbm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqiiqibzu"/><path class="awwwo0b-c"/><path class="h8y2zelcv"/><path class="iy524nh3x"/><path class="eppa5msbm"/>`,
		"fallback": "fxemoji:catside",
	});
}

export default Component;
