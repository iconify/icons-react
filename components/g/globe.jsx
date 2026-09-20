import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auu_2cchm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auu_2cchm"/>`,
		"fallback": "roentgen:globe",
	});
}

export default Component;
