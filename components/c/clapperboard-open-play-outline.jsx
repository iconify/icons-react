import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gl-vh0b0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gl-vh0b0v"/>`,
		"fallback": "solar:clapperboard-open-play-outline",
	});
}

export default Component;
