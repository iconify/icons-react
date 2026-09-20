import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3war6ylu.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3war6ylu"/>`,
		"fallback": "lineicons:briefcase-2",
	});
}

export default Component;
