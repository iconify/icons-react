import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dei3w-brh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dei3w-brh"/>`,
		"fallback": "noviair-light:file-clock",
	});
}

export default Component;
