import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdd3x5b6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdd3x5b6t"/>`,
		"fallback": "meteor-icons:cloud",
	});
}

export default Component;
