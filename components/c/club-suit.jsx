import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emu738-dw.css';
import '../../css/j/jafoz7lhw.css';
import '../../css/y/yfq8oqdtg.css';
import '../../css/k/kaohtkiuq.css';
import '../../css/x/xj3luwb3w.css';
import '../../css/z/zvamwdbip.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGJnnWLeYy" cx="46.1" cy="55.8" r="148.8" gradientUnits="userSpaceOnUse"><stop offset="0" class="emu738-dw"/><stop offset=".85" class="jafoz7lhw"/><stop offset="1" class="jafoz7lhw"/></radialGradient></defs><path class="yfq8oqdtg"/><path fill="url(#SVGJnnWLeYy)" transform="matrix(2.7 0 0 2.7 -8.593 -16.873)" class="kaohtkiuq"/><path class="xj3luwb3w"/><path class="zvamwdbip"/>`,
		"fallback": "xero-emoji:club-suit",
	});
}

export default Component;
