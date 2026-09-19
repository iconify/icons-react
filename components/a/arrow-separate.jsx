import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6hm_db6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6hm_db6v"/>`,
		"fallback": "iconoir:arrow-separate",
	});
}

export default Component;
