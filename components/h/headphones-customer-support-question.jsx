import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vwn3kz59i.css';
import '../../css/t/ta8z2lxla.css';
import '../../css/c/cahye61gh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vwn3kz59i"/><path class="ta8z2lxla"/><path class="cahye61gh"/></g>`,
		"fallback": "streamline-ultimate:headphones-customer-support-question",
	});
}

export default Component;
