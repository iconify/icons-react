import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc4cq9s2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc4cq9s2c"/>`,
		"fallback": "withicons:file-audio-solid",
	});
}

export default Component;
