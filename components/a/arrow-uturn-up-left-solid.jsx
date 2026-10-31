import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmoot56zp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dmoot56zp"/>`,
		"fallback": "sidekickicons:arrow-uturn-up-left-solid",
	});
}

export default Component;
