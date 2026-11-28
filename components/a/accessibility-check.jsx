import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8p8gfbmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8p8gfbmd"/>`,
		"fallback": "noviair:accessibility-check",
	});
}

export default Component;
