import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uphz-4baw.css';
import '../../css/o/o_fqm04wh.css';
import '../../css/p/pqpecwbqj.css';
import '../../css/z/ztuc-udhu.css';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bxspv8r-r.css';
import '../../css/e/e9pv6cc-v.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGZdSsJeFY" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" class="uphz-4baw"/><stop offset="100%" class="o_fqm04wh"/></linearGradient><linearGradient id="SVG8pHnxc4I" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" class="pqpecwbqj"/><stop offset="100%" class="ztuc-udhu"/></linearGradient></defs><g class="bi12bsetm"><path fill="url(#SVGZdSsJeFY)" transform="matrix(1 0 0 -1 19 134.11)" class="bxspv8r-r"/><path fill="url(#SVG8pHnxc4I)" transform="translate(19 14)" class="e9pv6cc-v"/></g>`,
		"fallback": "thesvg-color:flarum",
	});
}

export default Component;
