import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afx4zacet.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afx4zacet"/>`,
		"fallback": "energy-icons:infrared-panel-20-bold",
	});
}

export default Component;
