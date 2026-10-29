import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szzww6bpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szzww6bpi"/>`,
		"fallback": "withicons-bauhaus:blocks",
	});
}

export default Component;
