import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/ql-f45b9a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ql-f45b9a"/>`,
		"fallback": "radix-icons:blending-mode",
	});
}

export default Component;
