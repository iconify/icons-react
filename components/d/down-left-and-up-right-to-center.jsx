import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8tk3xbbv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8tk3xbbv"/>`,
		"fallback": "fa6-solid:down-left-and-up-right-to-center",
	});
}

export default Component;
