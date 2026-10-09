import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvshp_bta.css';
import '../../css/a/a1o2reb9p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvshp_bta"/><path class="a1o2reb9p"/>`,
		"fallback": "energy-icons:candle-48",
	});
}

export default Component;
