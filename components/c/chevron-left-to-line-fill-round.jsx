import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byq9j8u9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byq9j8u9d"/>`,
		"fallback": "coolicons:chevron-left-to-line-fill-round",
	});
}

export default Component;
