import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1d79ebop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1d79ebop"/>`,
		"fallback": "keyline-icons:fullscreen-exit-2-sharp",
	});
}

export default Component;
