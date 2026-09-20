import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zdvx-07sg.css';
import '../../css/n/nw9gl4b6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zdvx-07sg"/><path class="nw9gl4b6x"/></g>`,
		"fallback": "solar:dumbbells-broken",
	});
}

export default Component;
