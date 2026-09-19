import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd1jb_bhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd1jb_bhd"/>`,
		"fallback": "gridicons:book",
	});
}

export default Component;
