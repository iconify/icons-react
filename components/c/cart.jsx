import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxr6ncb7p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxr6ncb7p"/>`,
		"fallback": "dashicons:cart",
	});
}

export default Component;
