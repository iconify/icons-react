import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6vco797o.css';
import '../../css/l/lkfeoqf6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6vco797o"/><path clip-rule="evenodd" class="lkfeoqf6r"/>`,
		"fallback": "solar:health-outline",
	});
}

export default Component;
