import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uuxp37epe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uuxp37epe"/>`,
		"fallback": "coolicons:accessibility-fill-round",
	});
}

export default Component;
