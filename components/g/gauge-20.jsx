import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tby_lo-nb.css';
import '../../css/e/e33pt4b0g.css';
import '../../css/p/ps6ai49ok.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tby_lo-nb"/><path class="e33pt4b0g"/><path class="ps6ai49ok"/>`,
		"fallback": "energy-icons:gauge-20",
	});
}

export default Component;
