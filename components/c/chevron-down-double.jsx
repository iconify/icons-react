import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/god23jbro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="god23jbro"/>`,
		"fallback": "tdesign:chevron-down-double",
	});
}

export default Component;
