import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvimm4bdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kvimm4bdz"/>`,
		"fallback": "solar:gallery-round-outline",
	});
}

export default Component;
