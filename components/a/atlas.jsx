import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecsfs2btc.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecsfs2btc"/>`,
		"fallback": "fa-solid:atlas",
	});
}

export default Component;
