import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kz4ipxy5n.css';
import '../../css/h/hu27cibfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kz4ipxy5n"/><path class="hu27cibfj"/>`,
		"fallback": "solar:card-bold",
	});
}

export default Component;
