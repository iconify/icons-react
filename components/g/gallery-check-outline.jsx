import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vognngb9s.css';
import '../../css/g/gzhk0bblj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vognngb9s"/><path class="gzhk0bblj"/>`,
		"fallback": "solar:gallery-check-outline",
	});
}

export default Component;
