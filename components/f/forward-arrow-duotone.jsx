import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3e6fzopx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary s3e6fzopx"/>`,
		"fallback": "iconaut:forward-arrow-duotone",
	});
}

export default Component;
