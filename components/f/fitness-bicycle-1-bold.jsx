import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojochqbju.css';
import '../../css/y/y81o8wy_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojochqbju"/><path class="y81o8wy_q"/>`,
		"fallback": "streamline-ultimate:fitness-bicycle-1-bold",
	});
}

export default Component;
