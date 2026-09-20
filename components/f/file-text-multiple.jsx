import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdorq249g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdorq249g"/>`,
		"fallback": "mdi:file-text-multiple",
	});
}

export default Component;
