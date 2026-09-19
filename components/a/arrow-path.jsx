import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrxzvvl3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrxzvvl3k"/>`,
		"fallback": "heroicons-outline:arrow-path",
	});
}

export default Component;
