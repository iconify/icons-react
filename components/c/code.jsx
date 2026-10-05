import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/h/hygby1bcs.css';
import '../../css/f/fgy3qmbbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="hygby1bcs"/><path class="fgy3qmbbw"/></g>`,
		"fallback": "matita:code",
	});
}

export default Component;
