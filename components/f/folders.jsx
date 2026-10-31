import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/uq-azqhol.css';
import '../../css/p/plq6vo_ca.css';
import '../../css/m/mjkhw0b5w.css';
import '../../css/g/ggtlt1cud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="uq-azqhol wm-shadow"/><path class="plq6vo_ca wm-shadow"/><path class="mjkhw0b5w"/><path class="ggtlt1cud"/></g>`,
		"fallback": "withicons-brutal:folders",
	});
}

export default Component;
