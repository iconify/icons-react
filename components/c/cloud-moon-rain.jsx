import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkydw766g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkydw766g"/>`,
		"fallback": "uil:cloud-moon-rain",
	});
}

export default Component;
