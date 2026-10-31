import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xe9q90bft.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xe9q90bft"/>`,
		"fallback": "pinhead:gabled-building-with-window",
	});
}

export default Component;
