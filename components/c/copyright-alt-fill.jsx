import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k697zn7dx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k697zn7dx"/>`,
		"fallback": "si:copyright-alt-fill",
	});
}

export default Component;
