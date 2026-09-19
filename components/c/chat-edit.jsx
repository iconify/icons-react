import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/d/d7xt2nbzs.css';
import '../../css/j/jcrz3rb1c.css';
import '../../css/a/a0ymu897w.css';
import '../../css/s/s7e8ajkna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="d7xt2nbzs"/><path class="jcrz3rb1c"/><path class="a0ymu897w"/><path class="s7e8ajkna"/></g>`,
		"fallback": "akar-icons:chat-edit",
	});
}

export default Component;
