import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6jtdtbry.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6jtdtbry"/>`,
		"fallback": "dashicons:admin-post",
	});
}

export default Component;
