import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmu9l7bmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmu9l7bmy"/>`,
		"fallback": "tabler:building-bank",
	});
}

export default Component;
