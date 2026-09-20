import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbufax35a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbufax35a"/>`,
		"fallback": "streamline-logos:audacity-logo",
	});
}

export default Component;
