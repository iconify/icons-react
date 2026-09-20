import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aggim0kia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aggim0kia"/>`,
		"fallback": "simple-icons:clyp",
	});
}

export default Component;
