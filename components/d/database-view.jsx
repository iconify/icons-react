import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz6u-x48h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz6u-x48h"/>`,
		"fallback": "dashicons:database-view",
	});
}

export default Component;
