import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/p3i1n2byb.css';
import '../../css/u/u8r-p5byy.css';
import '../../css/a/anfjbcq9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="p3i1n2byb"/><path class="u8r-p5byy"/><path class="anfjbcq9s"/></g>`,
		"fallback": "streamline-freehand:crypto-currency-bitcoin-network-globe",
	});
}

export default Component;
