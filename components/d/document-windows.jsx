import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgamf5ziv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgamf5ziv"/>`,
		"fallback": "grommet-icons:document-windows",
	});
}

export default Component;
