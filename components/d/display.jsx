import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pl-__wjru.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pl-__wjru"/>`,
		"fallback": "lineicons:display",
	});
}

export default Component;
