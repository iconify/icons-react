import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne3jv2bii.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ne3jv2bii"/>`,
		"fallback": "icon-park-outline:hexagonal",
	});
}

export default Component;
