import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmnqfq9fv.css';
import '../../css/h/hjh88xboe.css';
import '../../css/u/u9c71mblg.css';
import '../../css/h/huuajhmrh.css';
import '../../css/y/y3o_mf5-z.css';
import '../../css/w/wna5v1bjq.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmnqfq9fv"/><path class="hjh88xboe"/><path class="u9c71mblg"/><circle class="huuajhmrh"/><path class="y3o_mf5-z"/><path class="wna5v1bjq"/>`,
		"fallback": "openmoji:distorted-face",
	});
}

export default Component;
