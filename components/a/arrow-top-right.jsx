import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qy_a9mbnd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qy_a9mbnd"/>`,
		"fallback": "radix-icons:arrow-top-right",
	});
}

export default Component;
