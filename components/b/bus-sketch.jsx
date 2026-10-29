import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gg-mv2bgo.css';
import '../../css/q/q0-i_05yv.css';
import '../../css/x/xxw3a2byj.css';
import '../../css/p/pgfe_0kpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="gg-mv2bgo"/><path class="q0-i_05yv wm-k"/><path class="wm-k xxw3a2byj"/><path class="pgfe_0kpr wm-a"/></g>`,
		"fallback": "withicons:bus-sketch",
	});
}

export default Component;
