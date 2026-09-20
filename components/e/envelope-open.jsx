import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uy_jm2heq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uy_jm2heq"/>`,
		"fallback": "radix-icons:envelope-open",
	});
}

export default Component;
