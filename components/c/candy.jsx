import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxhop7skf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxhop7skf"/>`,
		"fallback": "withicons-bauhaus:candy",
	});
}

export default Component;
