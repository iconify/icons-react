import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tesji1z-t.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tesji1z-t"/>`,
		"fallback": "whh:drupal",
	});
}

export default Component;
