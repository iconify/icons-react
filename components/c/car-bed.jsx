import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x34kw6p8w.css';
import '../../css/b/bb0f4cb0y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x34kw6p8w"/><path class="bb0f4cb0y"/>`,
		"fallback": "roentgen:car-bed",
	});
}

export default Component;
