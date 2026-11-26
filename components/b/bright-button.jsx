import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc7yyg80f.css';
import '../../css/w/wb84icb0c.css';
import '../../css/n/n7pnulb0b.css';
import '../../css/i/i3v5d7bmy.css';
import '../../css/o/oo2_lt8hf.css';
import '../../css/z/z0l6vmmlm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGmWm7ncEu" cx="77.3" cy="67.6" r="129.6" gradientUnits="userSpaceOnUse"><stop offset="0" class="fc7yyg80f"/><stop offset=".85" class="wb84icb0c"/><stop offset="1" class="wb84icb0c"/></radialGradient></defs><path class="n7pnulb0b"/><path fill="url(#SVGmWm7ncEu)" transform="matrix(3 0 0 3 -37.69 -37.69)" class="i3v5d7bmy"/><path class="oo2_lt8hf"/><path class="z0l6vmmlm"/>`,
		"fallback": "xero-emoji:bright-button",
	});
}

export default Component;
