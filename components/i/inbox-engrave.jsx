import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tro8k1dnr.css';
import '../../css/w/wpx6pz7qz.css';
import '../../css/y/y9ujhnbxv.css';
import '../../css/s/soujtab5z.css';
import '../../css/x/xs03ubb6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="tro8k1dnr wm-k"/><path class="wm-a wpx6pz7qz"/><path class="wm-shadow y9ujhnbxv"/><path class="soujtab5z wm-k"/><path class="wm-a xs03ubb6l"/></g>`,
		"fallback": "withicons:inbox-engrave",
	});
}

export default Component;
