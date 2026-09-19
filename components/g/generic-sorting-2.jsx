import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wabg_o55n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wabg_o55n"/>`,
		"fallback": "icons8:generic-sorting-2",
	});
}

export default Component;
