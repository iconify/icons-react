import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvxqpcc6p.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvxqpcc6p"/>`,
		"fallback": "picon:charger",
	});
}

export default Component;
