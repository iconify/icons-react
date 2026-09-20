import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v2ji48b7g.css';
import '../../css/n/nu_bmoc4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v2ji48b7g"/><path class="nu_bmoc4b"/></g>`,
		"fallback": "reicon:grammerly",
	});
}

export default Component;
