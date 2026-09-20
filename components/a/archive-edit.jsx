import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c27nap3uv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c27nap3uv"/>`,
		"fallback": "mdi:archive-edit",
	});
}

export default Component;
