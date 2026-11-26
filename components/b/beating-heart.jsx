import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/n/na-2c5b9l.css';
import '../../css/f/fo6b1pbaj.css';
import '../../css/d/d1j8upbii.css';
import '../../css/b/bysc8e0hv.css';
import '../../css/w/w2tnaoa4j.css';
import '../../css/c/cex14gbcu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVG2dpZiexT" cx=".35" cy=".3" r=".8"><stop offset="0" class="vc--wpv5i"/><stop offset=".25" class="na-2c5b9l"/><stop offset=".8" class="fo6b1pbaj"/><stop offset="1" class="d1j8upbii"/></radialGradient></defs><g transform="matrix(3.4 0 0 3.4 256 275.2)"><path fill="url(#SVG2dpZiexT)" class="bysc8e0hv"/><ellipse transform="rotate(-35 -27 -33)" class="w2tnaoa4j"/></g><path class="cex14gbcu"/>`,
		"fallback": "xero-emoji:beating-heart",
	});
}

export default Component;
