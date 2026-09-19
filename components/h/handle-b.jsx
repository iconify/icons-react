import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/h/hrq90hfel.css';
import '../../css/e/e23_3fb_i.css';
import '../../css/m/ml4lq6bzj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><circle class="hrq90hfel"/><path clip-rule="evenodd" class="e23_3fb_i"/><path clip-rule="evenodd" class="ml4lq6bzj"/></g>`,
		"fallback": "icon-park:handle-b",
	});
}

export default Component;
