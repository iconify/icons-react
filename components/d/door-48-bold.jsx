import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9f-pebyy.css';
import '../../css/a/aaw7kqsgb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9f-pebyy"/><path class="aaw7kqsgb"/>`,
		"fallback": "energy-icons:door-48-bold",
	});
}

export default Component;
