import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpqas1ggj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wpqas1ggj"/>`,
		"fallback": "streamline-logos:deviant-art-logo-2-block",
	});
}

export default Component;
