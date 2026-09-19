import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy1f2qbrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xy1f2qbrw"/>`,
		"fallback": "griddy-icons:bluesky",
	});
}

export default Component;
