import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrpnbqbmf.css';
import '../../css/h/h0iwgbcsg.css';
import '../../css/a/abj66lb3u.css';
import '../../css/j/jsaqtf_sl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrpnbqbmf"/><path class="h0iwgbcsg"/><path class="abj66lb3u"/><path class="jsaqtf_sl"/>`,
		"fallback": "energy-icons:compressed-air-48-bold",
	});
}

export default Component;
