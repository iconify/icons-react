import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktsidi8ox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ktsidi8ox"/>`,
		"fallback": "solar:city-outline",
	});
}

export default Component;
