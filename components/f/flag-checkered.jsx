import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/boow2abii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="boow2abii"/>`,
		"fallback": "mdi:flag-checkered",
	});
}

export default Component;
