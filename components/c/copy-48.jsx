import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/og2b0zuoz.css';
import '../../css/f/fi2nkdbwg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="og2b0zuoz"/><path class="fi2nkdbwg"/>`,
		"fallback": "energy-icons:copy-48",
	});
}

export default Component;
