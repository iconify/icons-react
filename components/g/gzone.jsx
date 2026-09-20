import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v33u5xbiv.css';
import '../../css/p/pdopt9m6b.css';
import '../../css/d/d8p91acss.css';
import '../../css/m/mrzpmkb3w.css';
import '../../css/s/sf3t8ob2w.css';
import '../../css/w/w9-ssfczf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v33u5xbiv"/><path class="pdopt9m6b"/><path class="d8p91acss"/><path class="mrzpmkb3w"/><path class="sf3t8ob2w"/><path class="w9-ssfczf"/>`,
		"fallback": "token:gzone",
	});
}

export default Component;
