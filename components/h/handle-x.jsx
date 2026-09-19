import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/h/hrq90hfel.css';
import '../../css/n/nk-6w4_er.css';
import '../../css/d/d25hpvtvf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><circle class="hrq90hfel"/><path class="nk-6w4_er"/><path class="d25hpvtvf"/></g>`,
		"fallback": "icon-park:handle-x",
	});
}

export default Component;
