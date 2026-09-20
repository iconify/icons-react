import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nui8jr4nz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nui8jr4nz"/>`,
		"fallback": "reicon:broom",
	});
}

export default Component;
