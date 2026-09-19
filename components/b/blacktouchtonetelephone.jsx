import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inrii0mwj.css';
import '../../css/y/yukot35yn.css';
import '../../css/c/ctunfubbk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inrii0mwj"/><path class="yukot35yn"/><path class="ctunfubbk"/>`,
		"fallback": "fxemoji:blacktouchtonetelephone",
	});
}

export default Component;
