import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5m-7ob2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5m-7ob2f"/>`,
		"fallback": "boxicons:brick-filled",
	});
}

export default Component;
