import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/b/b-rlo5b7p.css';
import '../../css/f/fdey14qly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="b-rlo5b7p"/><path class="fdey14qly"/></g>`,
		"fallback": "bitcoin-icons:bitcoin-circle-outline",
	});
}

export default Component;
