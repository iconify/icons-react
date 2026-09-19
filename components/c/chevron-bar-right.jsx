import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ld5of7bxx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ld5of7bxx"/>`,
		"fallback": "bi:chevron-bar-right",
	});
}

export default Component;
