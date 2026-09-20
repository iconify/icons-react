import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klde9sz9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klde9sz9r"/>`,
		"fallback": "mi:delete",
	});
}

export default Component;
