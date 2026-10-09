import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auuyt2boe.css';
import '../../css/n/nfapznoxi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auuyt2boe"/><path class="nfapznoxi"/>`,
		"fallback": "energy-icons:camera-48",
	});
}

export default Component;
