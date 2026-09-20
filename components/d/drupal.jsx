import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltt_9pbkn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltt_9pbkn"/>`,
		"fallback": "la:drupal",
	});
}

export default Component;
