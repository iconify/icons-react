import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sztxhqb7p.css';

const viewBox = {"width":24,"height":24,"left":-1.5,"top":-1.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sztxhqb7p"/>`,
		"fallback": "jam:hammer-f",
	});
}

export default Component;
