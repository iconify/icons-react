import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/uzr-ndbly.css';
import '../../css/z/zlmaezbcj.css';
import '../../css/b/bhtlebz9h.css';
import '../../css/t/tfc3--e7d.css';
import '../../css/h/h6yxyvxcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="uzr-ndbly wm-shadow"/><path class="wm-shadow zlmaezbcj"/><path class="bhtlebz9h"/><path class="tfc3--e7d"/><path class="h6yxyvxcn"/></g>`,
		"fallback": "withicons-brutal:footprints",
	});
}

export default Component;
