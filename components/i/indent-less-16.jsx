import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fr0z36_3e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fr0z36_3e"/>`,
		"fallback": "qlementine-icons:indent-less-16",
	});
}

export default Component;
