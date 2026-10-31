import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkxf86huh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkxf86huh"/>`,
		"fallback": "coolicons:cctv-fill-round",
	});
}

export default Component;
