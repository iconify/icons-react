import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/io40x634q.css';
import '../../css/a/a4usxjbwv.css';
import '../../css/g/g6ebdibnz.css';
import '../../css/k/k2k6wrbli.css';
import '../../css/u/uk4liwe1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="io40x634q wm-k"/><path class="a4usxjbwv wm-a"/><path class="g6ebdibnz wm-shadow"/><path class="k2k6wrbli wm-k"/><path class="uk4liwe1r wm-a"/></g>`,
		"fallback": "withicons:contactless-engrave",
	});
}

export default Component;
