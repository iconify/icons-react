import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwqhp5blj.css';
import '../../css/l/ldsnuiifp.css';
import '../../css/f/fcnbtv_es.css';
import '../../css/w/wgncmwr-v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwqhp5blj"/><path class="ldsnuiifp"/><path class="fcnbtv_es"/><path class="wgncmwr-v"/>`,
		"fallback": "fxemoji:cjkunifiedideograph-k",
	});
}

export default Component;
