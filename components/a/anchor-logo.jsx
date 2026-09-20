import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b46velbac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b46velbac"/>`,
		"fallback": "streamline-logos:anchor-logo",
	});
}

export default Component;
