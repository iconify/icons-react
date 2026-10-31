import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ux3isacaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ux3isacaz"/>`,
		"fallback": "withicons:heart-gloss",
	});
}

export default Component;
