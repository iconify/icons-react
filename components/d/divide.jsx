import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lit4pnbbm.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lit4pnbbm"/>`,
		"fallback": "fa-solid:divide",
	});
}

export default Component;
