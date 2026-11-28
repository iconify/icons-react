import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo-sj7iwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xo-sj7iwc"/>`,
		"fallback": "noviair-light:ai-chip-gear",
	});
}

export default Component;
