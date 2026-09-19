import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mii1j5e-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mii1j5e-p"/>`,
		"fallback": "iconamoon:comment-add-light",
	});
}

export default Component;
