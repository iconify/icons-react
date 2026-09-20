import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b4877sbkr.css';
import '../../css/n/nerkymkii.css';
import '../../css/f/fyr67fbfm.css';
import '../../css/j/jcod0ib9z.css';
import '../../css/r/rp4i65bvu.css';
import '../../css/s/s18mjpbze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="b4877sbkr"/><path class="nerkymkii"/><path class="fyr67fbfm"/><path class="jcod0ib9z"/><path class="rp4i65bvu"/><path class="s18mjpbze"/></g>`,
		"fallback": "solar:flash-drive-line-duotone",
	});
}

export default Component;
