import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/seti68b8j.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-6};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="seti68b8j"/>`,
		"fallback": "jam:battery-charging",
	});
}

export default Component;
