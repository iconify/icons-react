import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggr-kcw4r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ggr-kcw4r"/>`,
		"fallback": "streamline:donut-solid",
	});
}

export default Component;
