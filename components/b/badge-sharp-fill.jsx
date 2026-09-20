import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pi20tlb8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pi20tlb8w"/>`,
		"fallback": "keyline-icons:badge-sharp-fill",
	});
}

export default Component;
