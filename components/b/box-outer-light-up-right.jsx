import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i15wu7f2l.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i15wu7f2l"/>`,
		"fallback": "memory:box-outer-light-up-right",
	});
}

export default Component;
