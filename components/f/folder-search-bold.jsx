import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5dxyelor.css';
import '../../css/f/f03p8tb4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5dxyelor"/><path clip-rule="evenodd" class="f03p8tb4n"/>`,
		"fallback": "solar:folder-search-bold",
	});
}

export default Component;
