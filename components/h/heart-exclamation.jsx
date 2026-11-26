import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/n/nqf5313bg.css';
import '../../css/i/iukm4cgym.css';
import '../../css/d/d1j8upbii.css';
import '../../css/x/xmtqxibvn.css';
import '../../css/w/w2tnaoa4j.css';
import '../../css/l/l-hn13drj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGlvi9Bbxm" cx=".35" cy=".3" r=".8"><stop offset="0" class="vc--wpv5i"/><stop offset=".25" class="nqf5313bg"/><stop offset=".8" class="iukm4cgym"/><stop offset="1" class="d1j8upbii"/></radialGradient></defs><g transform="matrix(2.4 0 0 2.4 16 16)"><g transform="translate(100 75)scale(1.15)"><path fill="url(#SVGlvi9Bbxm)" class="xmtqxibvn"/><ellipse transform="rotate(-35 -27 -33)" class="w2tnaoa4j"/></g><circle class="l-hn13drj"/></g>`,
		"fallback": "xero-emoji:heart-exclamation",
	});
}

export default Component;
