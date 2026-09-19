import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd1f270-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd1f270-l"/>`,
		"fallback": "humbleicons:battery-charging",
	});
}

export default Component;
