import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-2i7nb1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-2i7nb1i"/>`,
		"fallback": "keyline-icons:align-offset-bottom-sharp-fill",
	});
}

export default Component;
