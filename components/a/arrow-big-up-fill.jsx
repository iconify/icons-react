import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtsbilbxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtsbilbxq"/>`,
		"fallback": "keyline-icons:arrow-big-up-fill",
	});
}

export default Component;
