import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af4i4zbnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="af4i4zbnz"/>`,
		"fallback": "solar:compass-square-bold",
	});
}

export default Component;
