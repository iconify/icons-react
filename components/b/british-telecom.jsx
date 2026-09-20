import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdurj7csh.css';
import '../../css/e/ex-yslbqn.css';
import '../../css/f/fp2iggcyd.css';

const viewBox = {"width":500,"height":209.52};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hdurj7csh"><path class="ex-yslbqn"/><path class="fp2iggcyd"/></g>`,
		"fallback": "thesvg-color:british-telecom",
	});
}

export default Component;
