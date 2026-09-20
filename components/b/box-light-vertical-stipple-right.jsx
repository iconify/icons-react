import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-xkov5aq.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-xkov5aq"/>`,
		"fallback": "memory:box-light-vertical-stipple-right",
	});
}

export default Component;
