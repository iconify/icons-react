import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctiilac8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctiilac8i"/>`,
		"fallback": "mynaui:dice-6-solid",
	});
}

export default Component;
