import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uaznomhfo.css';
import '../../css/g/g36-1rlma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uaznomhfo"/><path class="g36-1rlma"/></g>`,
		"fallback": "reicon:card-send3",
	});
}

export default Component;
