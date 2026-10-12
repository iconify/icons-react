import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0oa-qzdz.css';
import '../../css/t/tr3z08c2p.css';
import '../../css/a/a8t0brbje.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0oa-qzdz"/><path class="tr3z08c2p"/><path class="a8t0brbje"/>`,
		"fallback": "energy-icons:arrow-circle-right-20-bold",
	});
}

export default Component;
