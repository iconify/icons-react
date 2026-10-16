import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6t6ne13x.css';
import '../../css/v/vjvtfabym.css';
import '../../css/v/vpb3bu46w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6t6ne13x"/><path class="vjvtfabym"/><path class="vpb3bu46w"/>`,
		"fallback": "energy-icons:ammonia-tank-48-bold",
	});
}

export default Component;
