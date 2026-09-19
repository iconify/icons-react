import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2-y3rb4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2-y3rb4n"/>`,
		"fallback": "griddy-icons:elevator-filled",
	});
}

export default Component;
