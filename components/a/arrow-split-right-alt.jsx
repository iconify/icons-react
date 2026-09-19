import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/st-5kubif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="st-5kubif"/>`,
		"fallback": "griddy-icons:arrow-split-right-alt",
	});
}

export default Component;
