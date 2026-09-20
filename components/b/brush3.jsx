import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/j228v6b9i.css';
import '../../css/g/g0_nlcc1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="j228v6b9i"/><path class="g0_nlcc1b"/></g>`,
		"fallback": "reicon:brush3",
	});
}

export default Component;
