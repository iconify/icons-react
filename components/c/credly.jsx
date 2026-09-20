import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ioa832b5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ioa832b5o"/>`,
		"fallback": "simple-icons:credly",
	});
}

export default Component;
