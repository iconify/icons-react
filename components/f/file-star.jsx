import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cy8_od6wc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cy8_od6wc"/>`,
		"fallback": "noviair:file-star",
	});
}

export default Component;
