import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qe97cg-lx.css';
import '../../css/l/l-b3iobrb.css';
import '../../css/f/f0mlzybpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qe97cg-lx"/><rect class="l-b3iobrb"/><rect class="f0mlzybpd"/></g>`,
		"fallback": "lucide:bar-chart-big",
	});
}

export default Component;
