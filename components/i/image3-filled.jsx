import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv6o-j_2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv6o-j_2m"/>`,
		"fallback": "reicon:image3-filled",
	});
}

export default Component;
