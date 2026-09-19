import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1jarzbmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k1jarzbmw"/>`,
		"fallback": "iconamoon:arrow-top-right-3-square-fill",
	});
}

export default Component;
