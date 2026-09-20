import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cu1zxebkj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cu1zxebkj"/>`,
		"fallback": "roentgen:double-dip",
	});
}

export default Component;
