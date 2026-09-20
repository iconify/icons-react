import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s248fhbsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s248fhbsg"/>`,
		"fallback": "tdesign:drag-move",
	});
}

export default Component;
