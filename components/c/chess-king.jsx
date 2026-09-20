import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sj-rmmbkt.css';
import '../../css/n/npsxmea9i.css';
import '../../css/p/pt58k4boa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sj-rmmbkt"/><path class="npsxmea9i"/><path class="pt58k4boa"/></g>`,
		"fallback": "streamline-color:chess-king",
	});
}

export default Component;
