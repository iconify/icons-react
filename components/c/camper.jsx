import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yuyn37ibu.css';
import '../../css/m/m9nrudbxy.css';
import '../../css/v/vfwh6zbcp.css';
import '../../css/t/tl9wkhqgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="yuyn37ibu"/><circle class="m9nrudbxy"/><path class="vfwh6zbcp"/><path class="tl9wkhqgu"/></g>`,
		"fallback": "hugeicons:camper",
	});
}

export default Component;
