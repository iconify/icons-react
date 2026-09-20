import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac_7zloqp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ac_7zloqp"/>`,
		"fallback": "roentgen:bbq",
	});
}

export default Component;
