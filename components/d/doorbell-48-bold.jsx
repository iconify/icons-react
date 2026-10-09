import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_zpkg6wi.css';
import '../../css/u/uwggcevzf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_zpkg6wi"/><path class="uwggcevzf"/>`,
		"fallback": "energy-icons:doorbell-48-bold",
	});
}

export default Component;
