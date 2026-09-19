import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv41ofcxd.css';
import '../../css/b/bvlph1xti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv41ofcxd"/><path class="bvlph1xti"/>`,
		"fallback": "bx:cut",
	});
}

export default Component;
