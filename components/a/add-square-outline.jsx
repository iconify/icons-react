import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxj7gxbyl.css';
import '../../css/g/g4e643m4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxj7gxbyl"/><path clip-rule="evenodd" class="g4e643m4g"/>`,
		"fallback": "solar:add-square-outline",
	});
}

export default Component;
