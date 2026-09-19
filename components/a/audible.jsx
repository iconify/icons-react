import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo4xr7bel.css';
import '../../css/h/h8zuyyb3g.css';
import '../../css/h/hv6ma6bat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qo4xr7bel"/><path class="h8zuyyb3g"/><path class="hv6ma6bat"/>`,
		"fallback": "bxl:audible",
	});
}

export default Component;
