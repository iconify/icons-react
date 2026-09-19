import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jamagru6y.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jamagru6y"/>`,
		"fallback": "fa6-solid:arrow-trend-up",
	});
}

export default Component;
