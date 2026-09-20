import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkzg4o86q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkzg4o86q"/>`,
		"fallback": "si:expand-less-alt-duotone",
	});
}

export default Component;
