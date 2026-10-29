import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-be4tb1z.css';
import '../../css/f/fijx44bhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-be4tb1z wm-k"/><path class="fijx44bhr wm-a"/>`,
		"fallback": "withicons-bauhaus:arrow-down-right",
	});
}

export default Component;
