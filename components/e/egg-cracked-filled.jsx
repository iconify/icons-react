import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xatgpdb5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xatgpdb5f"/>`,
		"fallback": "griddy-icons:egg-cracked-filled",
	});
}

export default Component;
