import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afhm1hajj.css';
import '../../css/i/i_hf-m_7k.css';
import '../../css/t/tw6zf4kjo.css';
import '../../css/a/aemrg5b6p.css';
import '../../css/o/onlcnnb5o.css';
import '../../css/i/i2mdb5b5w.css';
import '../../css/t/tu6v9s-yt.css';
import '../../css/v/vmeo7bc7y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afhm1hajj"/><path class="i_hf-m_7k"/><path class="tw6zf4kjo"/><path class="aemrg5b6p"/><linearGradient id="SVGUjnHJbzG" x1="1550.03" x2="1550.03" y1="-475.494" y2="-1322.317" gradientTransform="matrix(.4241 0 0 -.2517 -401.32 -79.94)" gradientUnits="userSpaceOnUse"><stop offset="0" class="onlcnnb5o"/><stop offset="1" class="i2mdb5b5w"/></linearGradient><path fill="url(#SVGUjnHJbzG)" class="tu6v9s-yt"/><path class="vmeo7bc7y"/>`,
		"fallback": "selfhst:buildbot",
	});
}

export default Component;
