import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpe5qmjmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpe5qmjmf"/>`,
		"fallback": "keyline-icons:airpods-sharp-fill",
	});
}

export default Component;
