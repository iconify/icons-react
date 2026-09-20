import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhextp5nr.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-1.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhextp5nr"/>`,
		"fallback": "jam:alien-f",
	});
}

export default Component;
