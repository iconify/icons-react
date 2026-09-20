import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s87l4gbxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s87l4gbxx"/>`,
		"fallback": "tdesign:collection-filled",
	});
}

export default Component;
