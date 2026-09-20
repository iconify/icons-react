import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fk6-szb_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fk6-szb_s"/>`,
		"fallback": "streamline-freehand:home-to-cloud-sync",
	});
}

export default Component;
