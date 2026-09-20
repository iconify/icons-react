import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejl9-ctos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejl9-ctos"/>`,
		"fallback": "thesvg-color:canonical-landscape",
	});
}

export default Component;
