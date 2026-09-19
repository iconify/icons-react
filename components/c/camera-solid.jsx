import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eupbdacvd.css';
import '../../css/d/dylllccpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eupbdacvd"/><path clip-rule="evenodd" class="dylllccpj"/>`,
		"fallback": "basil:camera-solid",
	});
}

export default Component;
