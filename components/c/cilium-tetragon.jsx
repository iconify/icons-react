import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncnjnqr9z.css';
import '../../css/s/slvmpnboj.css';
import '../../css/y/y19r1qfdk.css';
import '../../css/o/omuskbcak.css';
import '../../css/n/ntg30nbhg.css';
import '../../css/y/yl7unqbbk.css';
import '../../css/p/p2p3wsbbv.css';
import '../../css/f/f30p36brj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncnjnqr9z"/><path class="slvmpnboj"/><path class="y19r1qfdk"/><path class="omuskbcak"/><path class="ntg30nbhg"/><path class="yl7unqbbk"/><path class="p2p3wsbbv"/><path class="f30p36brj"/>`,
		"fallback": "selfhst:cilium-tetragon",
	});
}

export default Component;
