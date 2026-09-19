import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cllix0kul.css';

const viewBox = {"width":416,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cllix0kul"/>`,
		"fallback": "ps:drupal",
	});
}

export default Component;
