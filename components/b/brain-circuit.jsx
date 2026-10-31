import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/m/m_n5q72bc.css';
import '../../css/z/z_6ptwbhl.css';
import '../../css/d/d_i46k63m.css';
import '../../css/w/wm1y2mbyi.css';
import '../../css/v/v3bzhxbbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="m_n5q72bc"/><path class="wm-shine z_6ptwbhl"/><path class="d_i46k63m wm-k"/><path class="wm-a wm1y2mbyi"/><path class="v3bzhxbbh wm-deco"/></g>`,
		"fallback": "withicons-kawaii:brain-circuit",
	});
}

export default Component;
