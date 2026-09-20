import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/t/tw30_ubet.css';
import '../../css/y/yic1xvbbc.css';
import '../../css/h/hhi9k4bqd.css';
import '../../css/s/s8xjouf5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="h_tsn8bxt"/><path class="tw30_ubet"/><path class="yic1xvbbc"/><path class="hhi9k4bqd"/><path class="s8xjouf5y"/></g>`,
		"fallback": "solar:black-hole-3-linear",
	});
}

export default Component;
