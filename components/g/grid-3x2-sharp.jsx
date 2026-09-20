import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ono7gqb3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ono7gqb3i"/>`,
		"fallback": "keyline-icons:grid-3x2-sharp",
	});
}

export default Component;
