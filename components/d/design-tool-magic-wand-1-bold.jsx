import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdcs0-b2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdcs0-b2y"/>`,
		"fallback": "streamline-ultimate:design-tool-magic-wand-1-bold",
	});
}

export default Component;
