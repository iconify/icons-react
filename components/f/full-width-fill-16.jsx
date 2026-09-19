import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyi6mkb3l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyi6mkb3l"/>`,
		"fallback": "garden:full-width-fill-16",
	});
}

export default Component;
