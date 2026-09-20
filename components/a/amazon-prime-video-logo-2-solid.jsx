import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh99pubrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rh99pubrj"/>`,
		"fallback": "streamline-logos:amazon-prime-video-logo-2-solid",
	});
}

export default Component;
