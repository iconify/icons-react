import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u37__bb1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u37__bb1g"/>`,
		"fallback": "keyline-icons:diagram-successor-sharp",
	});
}

export default Component;
