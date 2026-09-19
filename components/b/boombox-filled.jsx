import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1b_p5bbe.css';
import '../../css/o/ogqh4qb5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1b_p5bbe"/><path class="ogqh4qb5n"/>`,
		"fallback": "boxicons:boombox-filled",
	});
}

export default Component;
