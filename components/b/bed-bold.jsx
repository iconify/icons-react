import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdcb-2svx.css';
import '../../css/d/dod872beq.css';
import '../../css/g/g15r-phwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdcb-2svx"/><path class="dod872beq"/><path clip-rule="evenodd" class="g15r-phwb"/>`,
		"fallback": "solar:bed-bold",
	});
}

export default Component;
