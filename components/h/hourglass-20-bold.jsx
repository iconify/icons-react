import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iaeivt5cq.css';
import '../../css/j/j2tlh8boa.css';
import '../../css/r/rv0_ax7fp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iaeivt5cq"/><path class="j2tlh8boa"/><path class="rv0_ax7fp"/>`,
		"fallback": "energy-icons:hourglass-20-bold",
	});
}

export default Component;
