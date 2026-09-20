import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pghgizbpy.css';

const viewBox = {"width":24,"height":24,"left":-1,"top":-1};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pghgizbpy"/>`,
		"fallback": "jam:bandage-f",
	});
}

export default Component;
