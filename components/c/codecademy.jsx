import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftp8ftbdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftp8ftbdh"/>`,
		"fallback": "simple-icons:codecademy",
	});
}

export default Component;
