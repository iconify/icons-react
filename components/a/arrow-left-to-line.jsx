import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/r/rrmz2ebec.css';
import '../../css/d/d-obhnbiv.css';
import '../../css/o/opw7vpb3v.css';
import '../../css/j/jq3ppf7on.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGe9JNoeHg" x1="7.6" x2="21.4" y1="4.6" y2="19.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient><linearGradient id="SVGuvhSLe8c" x1="2.4" x2="4.6" y1="3.9" y2="20.1" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path class="rrmz2ebec wm-a"/><path fill="url(#SVGe9JNoeHg)" class="d-obhnbiv wm-a"/><path class="opw7vpb3v wm-k"/><path fill="url(#SVGuvhSLe8c)" class="jq3ppf7on wm-k"/></g>`,
		"fallback": "withicons-suite:arrow-left-to-line",
	});
}

export default Component;
