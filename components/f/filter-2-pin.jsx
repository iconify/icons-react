import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/but20cbcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="but20cbcx"/>`,
		"fallback": "tabler:filter-2-pin",
	});
}

export default Component;
