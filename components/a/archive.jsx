import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb7_-3bma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb7_-3bma"/>`,
		"fallback": "noviair-light:archive",
	});
}

export default Component;
