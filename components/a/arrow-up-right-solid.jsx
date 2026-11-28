import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxmzjib8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxmzjib8s"/>`,
		"fallback": "iconaut:arrow-up-right-solid",
	});
}

export default Component;
