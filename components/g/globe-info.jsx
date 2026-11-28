import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsvw7m6as.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsvw7m6as"/>`,
		"fallback": "noviair:globe-info",
	});
}

export default Component;
