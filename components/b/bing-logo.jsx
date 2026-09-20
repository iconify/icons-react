import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmo9ppb1i.css';
import '../../css/w/wjjq3cc4n.css';
import '../../css/p/piypaobsz.css';
import '../../css/o/oosxrvxhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="lmo9ppb1i"><path class="wjjq3cc4n"/><path class="piypaobsz"/><path class="oosxrvxhm"/></g>`,
		"fallback": "streamline-ultimate-color:bing-logo",
	});
}

export default Component;
