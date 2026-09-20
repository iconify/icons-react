import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f267jt5sf.css';
import '../../css/r/r5vbxk1ae.css';
import '../../css/x/xkv-ivrdv.css';
import '../../css/i/it7f39xje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGlKG6zcBK" x1="64.01" x2="32.99" y1="65.26" y2="89.48" gradientUnits="userSpaceOnUse"><stop offset=".18" class="f267jt5sf"/><stop offset="1" class="r5vbxk1ae"/></linearGradient></defs><path class="xkv-ivrdv"/><path fill="url(#SVGlKG6zcBK)" transform="translate(2.368 -9.404)scale(.30877)" class="it7f39xje"/>`,
		"fallback": "material-icon-theme:bitbucket",
	});
}

export default Component;
