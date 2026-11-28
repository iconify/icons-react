import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tiw3j3-js.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tiw3j3-js"/>`,
		"fallback": "noviair-light:id-card-lock",
	});
}

export default Component;
