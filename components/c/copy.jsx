import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvx3ap5pk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cvx3ap5pk"/>`,
		"fallback": "griddy-icons:copy",
	});
}

export default Component;
