import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1d3s3bsn.css';
import '../../css/l/lqbsjrb1w.css';
import '../../css/o/o676dwbcr.css';
import '../../css/u/u-r-ieuow.css';
import '../../css/i/i2d_gzgyz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1d3s3bsn"/><path class="lqbsjrb1w"/><path class="o676dwbcr"/><path class="u-r-ieuow"/><path class="i2d_gzgyz"/>`,
		"fallback": "fxemoji:bellcancellation",
	});
}

export default Component;
