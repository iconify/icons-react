import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar94a1r8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ar94a1r8y"/>`,
		"fallback": "iconoir:cloud-square-solid",
	});
}

export default Component;
