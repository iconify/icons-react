import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo2c-_rnt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eo2c-_rnt"/>`,
		"fallback": "bi:cart4",
	});
}

export default Component;
