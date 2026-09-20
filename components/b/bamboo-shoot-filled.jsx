import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brh8c5b1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brh8c5b1e"/>`,
		"fallback": "tdesign:bamboo-shoot-filled",
	});
}

export default Component;
