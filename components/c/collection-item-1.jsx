import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it330lbru.css';

const viewBox = {"width":472,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it330lbru"/>`,
		"fallback": "zmdi:collection-item-1",
	});
}

export default Component;
