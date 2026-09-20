import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzy6ww4uq.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-1.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzy6ww4uq"/>`,
		"fallback": "jam:alert-f",
	});
}

export default Component;
