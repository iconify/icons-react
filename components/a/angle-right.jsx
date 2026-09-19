import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcosmdn2a.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcosmdn2a"/>`,
		"fallback": "fa7-solid:angle-right",
	});
}

export default Component;
