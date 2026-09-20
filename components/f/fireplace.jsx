import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ht007_bvr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ht007_bvr"/>`,
		"fallback": "roentgen:fireplace",
	});
}

export default Component;
