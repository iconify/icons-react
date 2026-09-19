import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/patlzsgzl.css';
import '../../css/d/dvh2bwuis.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="patlzsgzl"/><path class="dvh2bwuis"/>`,
		"fallback": "icomoon-free:headphones",
	});
}

export default Component;
