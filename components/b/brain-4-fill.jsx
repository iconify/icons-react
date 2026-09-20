import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-tn6absb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-tn6absb"/>`,
		"fallback": "ri:brain-4-fill",
	});
}

export default Component;
