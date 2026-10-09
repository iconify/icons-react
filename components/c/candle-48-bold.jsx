import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3bwoucvq.css';
import '../../css/t/tydgjvody.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3bwoucvq"/><path class="tydgjvody"/>`,
		"fallback": "energy-icons:candle-48-bold",
	});
}

export default Component;
