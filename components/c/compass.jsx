import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfeaq5bhe.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfeaq5bhe"/>`,
		"fallback": "memory:compass",
	});
}

export default Component;
