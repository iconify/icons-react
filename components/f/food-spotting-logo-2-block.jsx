import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ks5i7cc0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ks5i7cc0v"/>`,
		"fallback": "streamline-logos:food-spotting-logo-2-block",
	});
}

export default Component;
