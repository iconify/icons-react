import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd4naybzo.css';
import '../../css/x/xbgwg93cp.css';
import '../../css/o/okog-dblc.css';
import '../../css/n/n11xj6b_f.css';
import '../../css/f/f8hyhhxyq.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vd4naybzo"/><path class="xbgwg93cp"/><path class="okog-dblc"/><path class="n11xj6b_f"/><path class="f8hyhhxyq"/>`,
		"fallback": "openmoji:bed",
	});
}

export default Component;
