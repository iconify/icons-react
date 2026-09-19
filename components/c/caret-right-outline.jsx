import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejyw6md3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejyw6md3s"/>`,
		"fallback": "bitcoin-icons:caret-right-outline",
	});
}

export default Component;
