import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/a/a-m8b9bhz.css';
import '../../css/z/z77ryvbfa.css';
import '../../css/q/qvra2koks.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/x/xc_je6bwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="a-m8b9bhz"/><path class="wm-shine z77ryvbfa"/><path class="qvra2koks wm-k"/><path class="qr4ochb5c wm-s"/><path class="wm-deco xc_je6bwo"/></g>`,
		"fallback": "withicons-kawaii:heart-off",
	});
}

export default Component;
