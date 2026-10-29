import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/o_vht2jmm.css';
import '../../css/b/bxecxbb3f.css';
import '../../css/m/mcsf3nhcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="o_vht2jmm"/><path class="bxecxbb3f"/><path class="mcsf3nhcs"/></g>`,
		"fallback": "withicons:arrow-big-up-sketch",
	});
}

export default Component;
