import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd95kpb_t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd95kpb_t"/>`,
		"fallback": "radix-icons:column-spacing",
	});
}

export default Component;
