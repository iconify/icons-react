import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iee106p3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iee106p3v"/>`,
		"fallback": "noviair:dice-3",
	});
}

export default Component;
