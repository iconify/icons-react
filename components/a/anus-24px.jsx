import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcb3j8zio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wcb3j8zio"/>`,
		"fallback": "healthicons:anus-24px",
	});
}

export default Component;
