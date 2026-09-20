import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g87mvbbzo.css';

const viewBox = {"width":24,"height":24,"left":-4.5,"top":-7};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g87mvbbzo"/>`,
		"fallback": "jam:indent",
	});
}

export default Component;
