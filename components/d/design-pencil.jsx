import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zi780g99c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zi780g99c"/>`,
		"fallback": "streamline-pixel:design-pencil",
	});
}

export default Component;
