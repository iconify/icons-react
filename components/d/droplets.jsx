import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/oayi_h3_a.css';
import '../../css/w/whr-2bczi.css';
import '../../css/d/dajtiqb1m.css';
import '../../css/o/og_e9rbqn.css';
import '../../css/q/qazivdtnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="oayi_h3_a wm-shadow"/><path class="whr-2bczi wm-shadow"/><path class="dajtiqb1m"/><path class="og_e9rbqn"/><path class="qazivdtnx"/></g>`,
		"fallback": "withicons-brutal:droplets",
	});
}

export default Component;
