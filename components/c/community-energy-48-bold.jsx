import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2nbzfjyr.css';
import '../../css/l/l-kxqtbrp.css';
import '../../css/q/q2b00ib0q.css';
import '../../css/a/ai15lpjsa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2nbzfjyr"/><path class="l-kxqtbrp"/><path class="q2b00ib0q"/><path class="ai15lpjsa"/>`,
		"fallback": "energy-icons:community-energy-48-bold",
	});
}

export default Component;
