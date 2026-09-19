import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls7z-wykt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ls7z-wykt"/>`,
		"fallback": "heroicons-outline:duplicate",
	});
}

export default Component;
