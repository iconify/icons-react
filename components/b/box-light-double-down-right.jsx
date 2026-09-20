import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csjoy6p0a.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csjoy6p0a"/>`,
		"fallback": "memory:box-light-double-down-right",
	});
}

export default Component;
