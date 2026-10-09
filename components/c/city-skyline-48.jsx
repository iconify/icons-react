import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyn0tjbsp.css';
import '../../css/f/f9-7d2bqa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyn0tjbsp"/><path class="f9-7d2bqa"/>`,
		"fallback": "energy-icons:city-skyline-48",
	});
}

export default Component;
