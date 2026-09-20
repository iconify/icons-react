import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eb973cc3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eb973cc3h"/>`,
		"fallback": "mdi:folder-special",
	});
}

export default Component;
