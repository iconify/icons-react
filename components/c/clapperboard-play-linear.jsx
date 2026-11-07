import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xvjk-cbox.css';
import '../../css/r/rcdawhb0x.css';
import '../../css/y/ykueg1b1u.css';
import '../../css/n/nr7t2bb1e.css';
import '../../css/z/zght4ub1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xvjk-cbox"/><path class="rcdawhb0x"/><path class="ykueg1b1u"/><path class="nr7t2bb1e"/><path class="zght4ub1f"/></g>`,
		"fallback": "solar:clapperboard-play-linear",
	});
}

export default Component;
