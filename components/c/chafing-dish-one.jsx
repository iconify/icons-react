import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcvuivbew.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcvuivbew"/>`,
		"fallback": "icon-park-outline:chafing-dish-one",
	});
}

export default Component;
