import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl8f_3bdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bl8f_3bdm"/>`,
		"fallback": "withicons:bread-solid",
	});
}

export default Component;
