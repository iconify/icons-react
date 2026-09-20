import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0qbacboq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0qbacboq"/>`,
		"fallback": "keyline-icons:git-pull-request-plus-sharp",
	});
}

export default Component;
