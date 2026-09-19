import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdakqj6gq.css';
import '../../css/h/hvadovc3g.css';
import '../../css/c/cl5x09bok.css';
import '../../css/d/df6h1lbpn.css';
import '../../css/e/en3utrntm.css';
import '../../css/z/z4ozpzboo.css';
import '../../css/y/yd40vbbwf.css';
import '../../css/u/u4_7mf2ve.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdakqj6gq"/><path class="hvadovc3g"/><path class="cl5x09bok"/><path class="df6h1lbpn"/><path class="en3utrntm"/><path class="z4ozpzboo"/><path class="yd40vbbwf"/><path class="u4_7mf2ve"/>`,
		"fallback": "devicon:androidstudio-wordmark",
	});
}

export default Component;
