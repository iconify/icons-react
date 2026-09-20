import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5kkhfbss.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5kkhfbss"/>`,
		"fallback": "memory:box-outer-light-dashed-up-down",
	});
}

export default Component;
