import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0kol9bky.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0kol9bky"/>`,
		"fallback": "charm:arrow-up-left",
	});
}

export default Component;
