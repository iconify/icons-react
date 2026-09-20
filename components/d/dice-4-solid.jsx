import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k41ar9pyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k41ar9pyx"/>`,
		"fallback": "nrk:dice-4-solid",
	});
}

export default Component;
