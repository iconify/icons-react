import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcu4ov-2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gcu4ov-2y"/>`,
		"fallback": "coolicons:checkbox-round",
	});
}

export default Component;
