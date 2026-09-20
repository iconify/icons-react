import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekc9s1z9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekc9s1z9d"/>`,
		"fallback": "mynaui:heading-3-solid",
	});
}

export default Component;
