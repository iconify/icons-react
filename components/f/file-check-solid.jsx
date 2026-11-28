import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljw_bfb7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljw_bfb7e"/>`,
		"fallback": "iconaut:file-check-solid",
	});
}

export default Component;
