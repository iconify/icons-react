import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfn9b2zds.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfn9b2zds"/>`,
		"fallback": "dashicons:database-export",
	});
}

export default Component;
