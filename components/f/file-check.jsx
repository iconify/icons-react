import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k866ciaux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k866ciaux"/>`,
		"fallback": "noviair-light:file-check",
	});
}

export default Component;
