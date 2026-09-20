import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgxshwb6j.css';
import '../../css/j/jjq_szb_f.css';
import '../../css/e/eloaaccms.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/r/rrk1jfd4z.css';
import '../../css/m/mohhrcbzh.css';
import '../../css/e/e-w3vi4mh.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGyoFAClZP" x1="0%" x2="99.996%" y1="36.301%" y2="64.611%"><stop offset="0%" class="xgxshwb6j"/><stop offset="100%" class="jjq_szb_f"/></linearGradient><linearGradient id="SVGnuFxjeJW" x1="102.837%" x2="-5.655%" y1="70.777%" y2="28.962%"><stop offset="0%" class="eloaaccms"/><stop offset="100%" class="vc--wpv5i"/></linearGradient><linearGradient id="SVGX0cLLd2o" x1="49.941%" x2="23.669%" y1="69.215%" y2="32.86%"><stop offset="0%" class="eloaaccms"/><stop offset="100%" class="vc--wpv5i"/></linearGradient></defs><path fill="url(#SVGyoFAClZP)" class="rrk1jfd4z"/><path fill="url(#SVGnuFxjeJW)" class="mohhrcbzh"/><path fill="url(#SVGX0cLLd2o)" class="e-w3vi4mh"/>`,
		"fallback": "thesvg-color:apidog",
	});
}

export default Component;
