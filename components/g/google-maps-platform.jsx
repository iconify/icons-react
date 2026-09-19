import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjazihb8a.css';
import '../../css/r/rtab-8bjj.css';
import '../../css/u/ubukluesx.css';
import '../../css/y/ygai96bmr.css';
import '../../css/q/qwrx_blcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjazihb8a"/><path class="rtab-8bjj"/><path class="ubukluesx"/><path class="ygai96bmr"/><path class="qwrx_blcb"/>`,
		"fallback": "gcp:google-maps-platform",
	});
}

export default Component;
