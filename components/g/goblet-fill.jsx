import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ninp90baw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ninp90baw"/>`,
		"fallback": "ri:goblet-fill",
	});
}

export default Component;
