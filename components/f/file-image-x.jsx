import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtgzif44e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtgzif44e"/>`,
		"fallback": "noviair:file-image-x",
	});
}

export default Component;
