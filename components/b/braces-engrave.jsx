import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xtt1ysbre.css';
import '../../css/b/blzdo3hjo.css';
import '../../css/x/xyd9cyb9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="xtt1ysbre"/><path class="blzdo3hjo wm-shadow"/><path class="xyd9cyb9i"/></g>`,
		"fallback": "withicons:braces-engrave",
	});
}

export default Component;
