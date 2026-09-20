import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-v5erbcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-v5erbcf"/>`,
		"fallback": "ri:id-card-fill",
	});
}

export default Component;
