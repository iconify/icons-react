import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efz6zcc6h.css';
import '../../css/i/i7sr6ubzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efz6zcc6h"/><path class="i7sr6ubzr"/>`,
		"fallback": "pixel:heading-3-solid",
	});
}

export default Component;
