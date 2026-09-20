import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zu8i7uc-o.css';
import '../../css/g/g757y11st.css';
import '../../css/o/o4qapjxgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zu8i7uc-o"/><path class="g757y11st"/><path class="o4qapjxgu"/></g>`,
		"fallback": "reicon:brifecase-timer-filled",
	});
}

export default Component;
