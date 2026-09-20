import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/of6e34b2c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="of6e34b2c"/>`,
		"fallback": "la:file-contract",
	});
}

export default Component;
