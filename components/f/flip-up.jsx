import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ib7m0zbcn.css';
import '../../css/e/ec2kgw3ko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ib7m0zbcn"/><path class="ec2kgw3ko"/>`,
		"fallback": "streamline-freehand:flip-up",
	});
}

export default Component;
