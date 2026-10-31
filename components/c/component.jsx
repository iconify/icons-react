import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/son4tudce.css';
import '../../css/f/f5e_mcc5s.css';
import '../../css/u/u2nfjkp5n.css';
import '../../css/u/udm27nbrn.css';
import '../../css/d/dm_ibof1l.css';
import '../../css/z/zeze0vgcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="son4tudce wm-shadow"/><path class="f5e_mcc5s wm-shadow"/><path class="u2nfjkp5n"/><path class="udm27nbrn"/><path class="dm_ibof1l"/><path class="zeze0vgcc"/></g>`,
		"fallback": "withicons-brutal:component",
	});
}

export default Component;
