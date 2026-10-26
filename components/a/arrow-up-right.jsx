import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu5343pla.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nu5343pla"/>`,
		"fallback": "doodle-icons:arrow-up-right",
	});
}

export default Component;
