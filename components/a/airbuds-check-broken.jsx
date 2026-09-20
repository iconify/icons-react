import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tslmujbuk.css';
import '../../css/p/pd6vqjbhf.css';
import '../../css/j/jswmtpb4p.css';
import '../../css/b/b--td4bgk.css';
import '../../css/k/kzojlpkqw.css';
import '../../css/x/x065vwpjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tslmujbuk"/><path class="pd6vqjbhf"/><path class="jswmtpb4p"/><path class="b--td4bgk"/><path class="kzojlpkqw"/><path class="x065vwpjs"/></g>`,
		"fallback": "solar:airbuds-check-broken",
	});
}

export default Component;
