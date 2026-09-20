import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oh0q2jb7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oh0q2jb7p"/>`,
		"fallback": "mdi:data-matrix-edit",
	});
}

export default Component;
