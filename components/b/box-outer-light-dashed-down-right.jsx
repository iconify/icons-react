import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-8blkbdr.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-8blkbdr"/>`,
		"fallback": "memory:box-outer-light-dashed-down-right",
	});
}

export default Component;
