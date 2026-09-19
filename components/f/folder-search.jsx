import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rn2kn79sw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rn2kn79sw"/>`,
		"fallback": "griddy-icons:folder-search",
	});
}

export default Component;
