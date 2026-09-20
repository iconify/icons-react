import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wc06j3b0v.css';
import '../../css/p/px2iteb1w.css';
import '../../css/f/f5jrq-big.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wc06j3b0v"/><path class="px2iteb1w"/><path class="f5jrq-big"/></g>`,
		"fallback": "tabler:camera-bitcoin",
	});
}

export default Component;
