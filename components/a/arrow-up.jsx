import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc2dpbbgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc2dpbbgc"/>`,
		"fallback": "lucide:arrow-up",
	});
}

export default Component;
