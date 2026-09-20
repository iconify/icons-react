import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyyg_11vl.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyyg_11vl"/>`,
		"fallback": "memory:arrow-up-down",
	});
}

export default Component;
