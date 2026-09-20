import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvkag4bby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvkag4bby"/>`,
		"fallback": "mdi:folder-house",
	});
}

export default Component;
