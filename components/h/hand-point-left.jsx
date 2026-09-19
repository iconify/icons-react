import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1c1yib-b.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1c1yib-b"/>`,
		"fallback": "fa7-regular:hand-point-left",
	});
}

export default Component;
