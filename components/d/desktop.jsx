import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2bwezb4f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2bwezb4f"/>`,
		"fallback": "radix-icons:desktop",
	});
}

export default Component;
