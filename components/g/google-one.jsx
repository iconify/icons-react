import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rrm42c80t.css';
import '../../css/j/j49-2cbgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rrm42c80t"/><path class="j49-2cbgy"/></g>`,
		"fallback": "iconoir:google-one",
	});
}

export default Component;
