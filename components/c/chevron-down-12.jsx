import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emhpwub6c.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emhpwub6c"/>`,
		"fallback": "octicon:chevron-down-12",
	});
}

export default Component;
