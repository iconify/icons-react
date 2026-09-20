import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5l0mll-q.css';
import '../../css/p/pil8ifblz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5l0mll-q"/><path class="pil8ifblz"/>`,
		"fallback": "streamline-ultimate:filter-2-1-bold",
	});
}

export default Component;
