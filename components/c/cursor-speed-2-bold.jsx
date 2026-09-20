import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gm0no-v2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gm0no-v2x"/>`,
		"fallback": "streamline-ultimate:cursor-speed-2-bold",
	});
}

export default Component;
