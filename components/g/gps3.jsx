import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c779anrza.css';
import '../../css/n/nuhjsybgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c779anrza"/><path class="nuhjsybgy"/></g>`,
		"fallback": "reicon:gps3",
	});
}

export default Component;
