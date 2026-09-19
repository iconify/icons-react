import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl6gc6mhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bl6gc6mhv"/>`,
		"fallback": "griddy-icons:announcement-alt-02-filled",
	});
}

export default Component;
