import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsfzl1bhj.css';
import '../../css/d/dtsd2ea6d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsfzl1bhj"/><path class="dtsd2ea6d"/>`,
		"fallback": "energy-icons:bungalow-48",
	});
}

export default Component;
