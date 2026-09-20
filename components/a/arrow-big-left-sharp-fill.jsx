import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6utndb0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6utndb0y"/>`,
		"fallback": "keyline-icons:arrow-big-left-sharp-fill",
	});
}

export default Component;
