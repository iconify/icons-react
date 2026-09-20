import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8ooa6h5z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8ooa6h5z"/>`,
		"fallback": "pinhead:box-truck",
	});
}

export default Component;
