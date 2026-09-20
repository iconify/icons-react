import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdv4d22pr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdv4d22pr"/>`,
		"fallback": "keyline-icons:expand-dashed-up-left-box-sharp",
	});
}

export default Component;
