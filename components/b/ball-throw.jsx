import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d09-d0b7r.css';
import '../../css/l/l44o3se9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d09-d0b7r"/><path class="l44o3se9a"/>`,
		"fallback": "boxicons:ball-throw",
	});
}

export default Component;
