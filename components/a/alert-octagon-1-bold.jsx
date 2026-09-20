import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1pe50bpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z1pe50bpu"/>`,
		"fallback": "streamline-ultimate:alert-octagon-1-bold",
	});
}

export default Component;
