import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pmqxkqbgw.css';
import '../../css/g/gj06b-b7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pmqxkqbgw"/><path class="gj06b-b7r"/></g>`,
		"fallback": "andrsrxn:hourglass",
	});
}

export default Component;
