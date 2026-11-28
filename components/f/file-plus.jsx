import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlyk6t44o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlyk6t44o"/>`,
		"fallback": "noviair:file-plus",
	});
}

export default Component;
