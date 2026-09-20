import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqe91nbpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rqe91nbpj"/>`,
		"fallback": "keyline-icons:circle-quarter-fill",
	});
}

export default Component;
