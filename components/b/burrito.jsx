import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xu4ch7b4k.css';
import '../../css/h/hshbphkqv.css';
import '../../css/j/ju50y3dul.css';
import '../../css/f/f2zgmfbez.css';
import '../../css/z/z0aj8yglb.css';
import '../../css/q/qf_qd1b4s.css';
import '../../css/m/m1-42ebwf.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xu4ch7b4k"/><path class="hshbphkqv"/><path class="ju50y3dul"/><path class="f2zgmfbez"/><path class="z0aj8yglb"/><path class="qf_qd1b4s"/><path class="m1-42ebwf"/>`,
		"fallback": "iconito:burrito",
	});
}

export default Component;
