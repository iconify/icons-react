import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-65o2amg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-65o2amg"/>`,
		"fallback": "ri:folder-4-fill",
	});
}

export default Component;
