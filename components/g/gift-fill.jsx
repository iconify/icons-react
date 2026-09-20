import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bal_--nnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bal_--nnr"/>`,
		"fallback": "ri:gift-fill",
	});
}

export default Component;
