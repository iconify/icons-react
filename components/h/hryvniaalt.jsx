import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lobqj9b4t.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lobqj9b4t"/>`,
		"fallback": "whh:hryvniaalt",
	});
}

export default Component;
