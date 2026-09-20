import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/r/rnxqn5b3x.css';
import '../../css/n/nhnnwkz7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="rnxqn5b3x"/><path class="nhnnwkz7z"/></g>`,
		"fallback": "reicon:cloud-minus3",
	});
}

export default Component;
