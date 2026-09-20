import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/v/v-en9qcfk.css';
import '../../css/w/wz1po1d3x.css';
import '../../css/j/j93jaqb1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="v-en9qcfk"/><path class="wz1po1d3x"/><path class="j93jaqb1g"/></g>`,
		"fallback": "streamline-cyber:in-love",
	});
}

export default Component;
