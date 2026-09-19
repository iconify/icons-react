import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqblwla6m.css';

const viewBox = {"width":1664,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqblwla6m"/>`,
		"fallback": "fa:check-square-o",
	});
}

export default Component;
