import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g2mv2kb9g.css';
import '../../css/n/n97utxnno.css';
import '../../css/t/tqjxo4v_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="g2mv2kb9g"/><path class="n97utxnno"/><path class="tqjxo4v_x"/></g>`,
		"fallback": "withicons:droplet-sketch",
	});
}

export default Component;
