import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsmt0crsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsmt0crsu"/>`,
		"fallback": "iconaut:badge-indian-rupee-solid",
	});
}

export default Component;
