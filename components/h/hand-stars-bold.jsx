import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngnrofbyv.css';
import '../../css/g/gvks53lmr.css';
import '../../css/j/j04m6bc9t.css';
import '../../css/a/a87w34_cd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngnrofbyv"/><path class="gvks53lmr"/><path class="j04m6bc9t"/><path class="a87w34_cd"/>`,
		"fallback": "solar:hand-stars-bold",
	});
}

export default Component;
