import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxplhebtx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxplhebtx"/>`,
		"fallback": "sidekickicons:arrow-bottom-left-on-square-20-solid",
	});
}

export default Component;
