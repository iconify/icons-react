import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nudhr_x9i.css';
import '../../css/p/pjsa-gb0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nudhr_x9i"/><path class="pjsa-gb0i"/></g>`,
		"fallback": "evicons:highway-charging",
	});
}

export default Component;
