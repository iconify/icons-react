import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dpq6rsb-m.css';
import '../../css/r/rsou20czl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dpq6rsb-m"/><path class="rsou20czl"/></g>`,
		"fallback": "iconoir:html5",
	});
}

export default Component;
