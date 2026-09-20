import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sy62p4obt.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-6};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sy62p4obt"/>`,
		"fallback": "jam:battery-charging-f",
	});
}

export default Component;
