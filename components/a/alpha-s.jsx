import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt_hpirfh.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt_hpirfh"/>`,
		"fallback": "memory:alpha-s",
	});
}

export default Component;
