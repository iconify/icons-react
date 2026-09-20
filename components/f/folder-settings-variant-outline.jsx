import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4tqrxz6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4tqrxz6i"/>`,
		"fallback": "mdi:folder-settings-variant-outline",
	});
}

export default Component;
