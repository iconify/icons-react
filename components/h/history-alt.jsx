import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eez0mreia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eez0mreia"/>`,
		"fallback": "uis:history-alt",
	});
}

export default Component;
