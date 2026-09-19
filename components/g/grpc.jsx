import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezjv0nbrt.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezjv0nbrt"/>`,
		"fallback": "devicon-plain:grpc",
	});
}

export default Component;
