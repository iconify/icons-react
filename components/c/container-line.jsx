import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrk4kiyas.css';
import '../../css/a/ayp4rjdbd.css';
import '../../css/q/qm3y9xbkb.css';
import '../../css/w/wvim-_btc.css';
import '../../css/t/tq7sme_1i.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 qrk4kiyas"/><path class="ayp4rjdbd clr-i-outline clr-i-outline-path-2"/><path class="clr-i-outline clr-i-outline-path-3 qm3y9xbkb"/><path class="clr-i-outline clr-i-outline-path-4 wvim-_btc"/><path class="clr-i-outline clr-i-outline-path-5 tq7sme_1i"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:container-line",
	});
}

export default Component;
