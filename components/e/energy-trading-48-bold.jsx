import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gaeaflbsb.css';
import '../../css/q/q2s99zbjl.css';
import '../../css/i/igpss3xso.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gaeaflbsb"/><path class="q2s99zbjl"/><path class="igpss3xso"/>`,
		"fallback": "energy-icons:energy-trading-48-bold",
	});
}

export default Component;
