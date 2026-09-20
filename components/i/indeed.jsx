import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kan00ac-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kan00ac-h"/>`,
		"fallback": "simple-icons:indeed",
	});
}

export default Component;
