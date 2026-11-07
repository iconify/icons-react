import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v2cunjb9g.css';
import '../../css/g/gui0egbgp.css';
import '../../css/y/ync-jn0hz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v2cunjb9g"/><path class="gui0egbgp"/><path class="ync-jn0hz"/></g>`,
		"fallback": "solar:code-line-duotone",
	});
}

export default Component;
