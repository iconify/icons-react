import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhv6hlbif.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xhv6hlbif"/>`,
		"fallback": "heroicons:folder-plus-20-solid",
	});
}

export default Component;
