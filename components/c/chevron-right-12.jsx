import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo2aflbnt.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xo2aflbnt"/>`,
		"fallback": "octicon:chevron-right-12",
	});
}

export default Component;
