import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d93v-8biw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d93v-8biw"/>`,
		"fallback": "keyline-icons:book-minus",
	});
}

export default Component;
