import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6junabxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m6junabxw"/>`,
		"fallback": "sidekickicons:arrow-bottom-left-on-square-solid",
	});
}

export default Component;
