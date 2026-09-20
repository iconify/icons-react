import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj-o9e.css';
import '../../css/y/yi8b0f.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-from-30.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rj-o9e"/><path class="yi8b0f"/>`,
		"fallback": "line-md:heart-filled-half",
	});
}

export default Component;
