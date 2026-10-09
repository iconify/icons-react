import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qh0wmoblc.css';
import '../../css/o/oxbk-rb9l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qh0wmoblc"/><path class="oxbk-rb9l"/>`,
		"fallback": "energy-icons:barrel-48",
	});
}

export default Component;
