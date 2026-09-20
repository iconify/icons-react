import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkc41lb-e.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkc41lb-e"/>`,
		"fallback": "memory:alpha-v",
	});
}

export default Component;
