import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr8e64lzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nr8e64lzi"/>`,
		"fallback": "mynaui:home-check-solid",
	});
}

export default Component;
