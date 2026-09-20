import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt9lw47qv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt9lw47qv"/>`,
		"fallback": "teenyicons:drag-outline",
	});
}

export default Component;
