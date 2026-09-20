import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gl-5a4gok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gl-5a4gok"/>`,
		"fallback": "solar:clock-square-outline",
	});
}

export default Component;
