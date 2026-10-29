import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/d_xpcxb4a.css';
import '../../css/o/o_0yafjul.css';
import '../../css/v/vze4wuf6n.css';
import '../../css/e/eod03wb_e.css';
import '../../css/e/evx6rzb0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="d_xpcxb4a wm-deco"/><path class="o_0yafjul wm-deco"/><path class="vze4wuf6n wm-deco"/><path class="eod03wb_e wm-k"/><path class="evx6rzb0c wm-a"/></g>`,
		"fallback": "withicons:atom-blueprint",
	});
}

export default Component;
