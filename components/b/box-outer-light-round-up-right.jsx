import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ym6sbbbvm.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ym6sbbbvm"/>`,
		"fallback": "memory:box-outer-light-round-up-right",
	});
}

export default Component;
