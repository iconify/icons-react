import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzd0tlb1j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzd0tlb1j"/>`,
		"fallback": "radix-icons:framer-logo",
	});
}

export default Component;
