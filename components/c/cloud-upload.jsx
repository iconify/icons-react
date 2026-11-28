import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9-f-xd5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9-f-xd5p"/>`,
		"fallback": "noviair:cloud-upload",
	});
}

export default Component;
