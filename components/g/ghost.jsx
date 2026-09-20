import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxaru7c3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxaru7c3p"/>`,
		"fallback": "meteor-icons:ghost",
	});
}

export default Component;
