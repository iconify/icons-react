import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohx0-hb1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohx0-hb1h"/>`,
		"fallback": "si:flow-cascade-fill",
	});
}

export default Component;
