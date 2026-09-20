import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i339vabyb.css';
import '../../css/g/gtfr4-buh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i339vabyb"/><path class="gtfr4-buh"/>`,
		"fallback": "streamline-freehand:drawer-image",
	});
}

export default Component;
