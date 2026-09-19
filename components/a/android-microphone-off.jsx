import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktwpc4lka.css';
import '../../css/z/zfvalbp8b.css';
import '../../css/w/wh0krirqr.css';
import '../../css/s/sosnt7a2s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktwpc4lka"/><path class="zfvalbp8b"/><path class="wh0krirqr"/><path class="sosnt7a2s"/>`,
		"fallback": "ion:android-microphone-off",
	});
}

export default Component;
