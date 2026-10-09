import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9wzu3thg.css';
import '../../css/l/ligxsu4bo.css';
import '../../css/e/ev0jxtbrs.css';
import '../../css/m/m574ul2mu.css';
import '../../css/i/i4g1ambsu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9wzu3thg"/><path class="ligxsu4bo"/><path class="ev0jxtbrs"/><path class="m574ul2mu"/><path class="i4g1ambsu"/>`,
		"fallback": "energy-icons:carbon-sink-48",
	});
}

export default Component;
