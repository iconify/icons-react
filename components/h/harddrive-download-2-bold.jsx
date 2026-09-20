import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/on9ac8b4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="on9ac8b4l"/>`,
		"fallback": "streamline-ultimate:harddrive-download-2-bold",
	});
}

export default Component;
