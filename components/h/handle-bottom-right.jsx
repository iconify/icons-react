import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-c__p3wy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-c__p3wy"/>`,
		"fallback": "lucide:handle-bottom-right",
	});
}

export default Component;
