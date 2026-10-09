import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fop36ybmj.css';
import '../../css/v/vpxwfc0bg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fop36ybmj"/><path class="vpxwfc0bg"/>`,
		"fallback": "energy-icons:ev-range-48-bold",
	});
}

export default Component;
