import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/os9ts92df.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="os9ts92df"/>`,
		"fallback": "solar:crown-outline",
	});
}

export default Component;
