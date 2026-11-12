import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_-mg0p1l.css';
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
		"content": `<path class="y_-mg0p1l"/><path class="s672cjb3b"/><linearGradient id="SVGIdG2NbyG" x1="53.8" x2="458.2" y1="60.7" y2="60.7" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="kckc1iwlf"/></linearGradient><path fill="url(#SVGIdG2NbyG)" class="x8rkn-b2l"/>`,
		"fallback": "selfhst:anycable-light",
	});
}

export default Component;
