import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/s/sjx7bppvr.css';
import '../../css/e/e_bzrod9z.css';
import '../../css/f/f4bt58bzj.css';
import '../../css/z/z6uwlebdz.css';
import '../../css/b/b0380bchc.css';
import '../../css/i/in9d5ac6n.css';
import '../../css/y/yt-id6uia.css';
import '../../css/w/w321-4b5f.css';
import '../../css/k/kkim--7xd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGSUIVXrmb" cx="75.9" cy="100" r="137.6" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset=".85" class="sjx7bppvr"/><stop offset="1" class="sjx7bppvr"/></radialGradient></defs><g transform="matrix(2.6 0 0 2.6 .537 .537)"><path class="e_bzrod9z"/><path fill="url(#SVGSUIVXrmb)" class="f4bt58bzj"/><path class="z6uwlebdz"/><defs><clipPath id="SVGWHGSTcjy"><path class="b0380bchc"/></clipPath></defs><g clip-path="url(#SVGWHGSTcjy)" class="in9d5ac6n"><path class="yt-id6uia"/><path class="w321-4b5f"/></g><path class="kkim--7xd"/></g>`,
		"fallback": "xero-emoji:baseball",
	});
}

export default Component;
