import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba0b0rtyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ba0b0rtyv"/>`,
		"fallback": "iconamoon:arrow-up-2-light",
	});
}

export default Component;
