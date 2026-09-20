import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uflyx8uae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uflyx8uae"/>`,
		"fallback": "keyline-icons:folder-search-sharp",
	});
}

export default Component;
