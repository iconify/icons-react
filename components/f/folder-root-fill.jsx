import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyl8i9baz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyl8i9baz"/>`,
		"fallback": "mingcute:folder-root-fill",
	});
}

export default Component;
