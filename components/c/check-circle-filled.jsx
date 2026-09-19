import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfk5y9bsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfk5y9bsj"/>`,
		"fallback": "boxicons:check-circle-filled",
	});
}

export default Component;
