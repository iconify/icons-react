import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sl-t0bawj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sl-t0bawj"/>`,
		"fallback": "noviair:image-off",
	});
}

export default Component;
