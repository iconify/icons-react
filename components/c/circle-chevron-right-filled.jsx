import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf_-qtb6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tf_-qtb6e"/>`,
		"fallback": "tabler:circle-chevron-right-filled",
	});
}

export default Component;
