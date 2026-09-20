import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvzt0qx4o.css';
import '../../css/u/uem9-5err.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvzt0qx4o"/><path class="uem9-5err"/>`,
		"fallback": "streamline-freehand:controls-slider-toggle-right",
	});
}

export default Component;
