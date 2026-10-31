import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/muf-8jbyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="muf-8jbyw"/>`,
		"fallback": "coolicons:arrow-down-small-duotone-round",
	});
}

export default Component;
