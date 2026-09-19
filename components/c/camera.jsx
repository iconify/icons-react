import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1dr-lz2y.css';
import '../../css/d/dccl6cslv.css';
import '../../css/b/bz199wbrk.css';
import '../../css/j/jrvk_k-kt.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1dr-lz2y"/><path class="dccl6cslv"/><circle class="bz199wbrk"/><path class="jrvk_k-kt"/>`,
		"fallback": "ei:camera",
	});
}

export default Component;
