import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujx4dsesw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujx4dsesw"/>`,
		"fallback": "radix-icons:border-style",
	});
}

export default Component;
