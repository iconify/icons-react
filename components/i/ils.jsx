import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c56pw3j7j.css';

const viewBox = {"width":23,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c56pw3j7j"/>`,
		"fallback": "fontisto:ils",
	});
}

export default Component;
