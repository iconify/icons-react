import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyz5gkbrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyz5gkbrj"/>`,
		"fallback": "tabler:droplet-x",
	});
}

export default Component;
