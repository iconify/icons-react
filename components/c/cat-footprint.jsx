import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3gh1kbsr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3gh1kbsr"/>`,
		"fallback": "icons8:cat-footprint",
	});
}

export default Component;
