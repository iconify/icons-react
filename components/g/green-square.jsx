import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kynbx4b0y.css';
import '../../css/y/yku_4z9pl.css';
import '../../css/x/xht9v2b6m.css';
import '../../css/u/uh-vabbch.css';
import '../../css/h/h0bicxbhw.css';
import '../../css/z/zjr7pabxr.css';
import '../../css/y/y-_uuuecm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVG8s3FnbmZ" cx="64.1" cy="53.4" r="142.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="kynbx4b0y"/><stop offset=".85" class="yku_4z9pl"/><stop offset="1" class="yku_4z9pl"/></radialGradient></defs><path class="xht9v2b6m"/><path fill="url(#SVG8s3FnbmZ)" transform="matrix(2.8 0 0 2.8 -28.016 -28.016)" class="uh-vabbch"/><path class="h0bicxbhw"/><path class="zjr7pabxr"/><path class="y-_uuuecm"/>`,
		"fallback": "xero-emoji:green-square",
	});
}

export default Component;
