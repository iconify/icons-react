import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekztc3dhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ekztc3dhc"/>`,
		"fallback": "solar:folder-up-bold",
	});
}

export default Component;
