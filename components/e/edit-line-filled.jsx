import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yioxj7y0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yioxj7y0u"/>`,
		"fallback": "griddy-icons:edit-line-filled",
	});
}

export default Component;
