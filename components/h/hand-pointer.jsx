import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqromeb2c.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqromeb2c"/>`,
		"fallback": "fa-solid:hand-pointer",
	});
}

export default Component;
