import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ouxl3ac9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouxl3ac9l"/>`,
		"fallback": "pixelarticons:docker-solid",
	});
}

export default Component;
