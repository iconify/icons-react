import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bn9u6kbar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bn9u6kbar"/>`,
		"fallback": "humbleicons:incognito-2",
	});
}

export default Component;
