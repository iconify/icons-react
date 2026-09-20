import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejoikql5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ejoikql5r"/>`,
		"fallback": "streamline-logos:food-spotting-logo-1-block",
	});
}

export default Component;
