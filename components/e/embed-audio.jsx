import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py6-88b7v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="py6-88b7v"/>`,
		"fallback": "dashicons:embed-audio",
	});
}

export default Component;
