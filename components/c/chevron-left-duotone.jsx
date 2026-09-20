import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vz8zv6d6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vz8zv6d6f"/>`,
		"fallback": "stash:chevron-left-duotone",
	});
}

export default Component;
