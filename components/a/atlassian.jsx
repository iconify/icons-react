import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sav6x4bmf.css';
import '../../css/g/g_gp7lgqe.css';
import '../../css/a/acqam2b4p.css';
import '../../css/h/hhq1vco0v.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGAbOJnbmb" x1="99.7%" x2="39.8%" y1="15.8%" y2="97.4%"><stop offset="0%" class="sav6x4bmf"/><stop offset="92.3%" class="g_gp7lgqe"/></linearGradient></defs><path fill="url(#SVGAbOJnbmb)" class="acqam2b4p"/><path class="hhq1vco0v"/>`,
		"fallback": "thesvg-color:atlassian",
	});
}

export default Component;
