import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cul1c6h3i.css';
import '../../css/h/h6kufobuh.css';
import '../../css/f/ffxp6eb1z.css';
import '../../css/y/y1kpj5oie.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cul1c6h3i"/><path class="h6kufobuh"/><path class="ffxp6eb1z"/><path class="y1kpj5oie"/></g>`,
		"fallback": "streamline-kameleon-color:coupons-pop",
	});
}

export default Component;
