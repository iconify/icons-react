import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5hg-lb1l.css';
import '../../css/p/pgpb8-lyq.css';
import '../../css/s/s672cjb3b.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/k/kckc1iwlf.css';
import '../../css/x/x8rkn-b2l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5hg-lb1l"/><path class="pgpb8-lyq"/><path class="s672cjb3b"/><linearGradient id="SVGdNBIbe9E" x1="53.823" x2="458.177" y1="60.653" y2="60.653" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="kckc1iwlf"/></linearGradient><path fill="url(#SVGdNBIbe9E)" class="x8rkn-b2l"/>`,
		"fallback": "selfhst:anycable-light",
	});
}

export default Component;
