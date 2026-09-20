import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf4ln8bfv.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-4};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kf4ln8bfv"/>`,
		"fallback": "jam:box",
	});
}

export default Component;
