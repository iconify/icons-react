import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x384x5lmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x384x5lmg"/>`,
		"fallback": "boxicons:grid-column-right",
	});
}

export default Component;
