import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mv2or40zo.css';
import '../../css/w/wjkbjvb7n.css';
import '../../css/r/rlvl2kb3g.css';
import '../../css/v/v4jmbs15x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="mv2or40zo"/><path class="wjkbjvb7n"/><path class="rlvl2kb3g"/><path class="v4jmbs15x"/></g>`,
		"fallback": "streamline-ultimate:image-file-star",
	});
}

export default Component;
