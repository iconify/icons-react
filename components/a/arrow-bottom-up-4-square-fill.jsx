import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxb7krdgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rxb7krdgv"/>`,
		"fallback": "iconamoon:arrow-bottom-up-4-square-fill",
	});
}

export default Component;
