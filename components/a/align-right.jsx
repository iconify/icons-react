import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyj7c0ewx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyj7c0ewx"/>`,
		"fallback": "lucide:align-right",
	});
}

export default Component;
