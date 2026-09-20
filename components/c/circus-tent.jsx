import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/w/w7idbquyh.css';
import '../../css/g/gd_48ac5o.css';
import '../../css/e/e16pvxbca.css';
import '../../css/p/pe8bgdbwr.css';
import '../../css/j/jr2ek6bel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="w7idbquyh"/><path class="gd_48ac5o"/><path class="e16pvxbca"/><path class="pe8bgdbwr"/><path class="jr2ek6bel"/></g>`,
		"fallback": "streamline-sharp-color:circus-tent",
	});
}

export default Component;
