import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v51u0wbig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v51u0wbig"/>`,
		"fallback": "uit:house-user",
	});
}

export default Component;
