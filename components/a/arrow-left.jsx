import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1v0vkkgf.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1v0vkkgf"/>`,
		"fallback": "jam:arrow-left",
	});
}

export default Component;
