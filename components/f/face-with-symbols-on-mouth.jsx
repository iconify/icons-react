import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rmf30cp6v.css';
import '../../css/f/f5tq5acha.css';
import '../../css/y/yq17t_xnl.css';
import '../../css/m/m_hfrwlhq.css';
import '../../css/w/wya1mhbzt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rmf30cp6v"/><path class="f5tq5acha"/><path class="yq17t_xnl"/><path class="m_hfrwlhq"/><path class="wya1mhbzt"/></g>`,
		"fallback": "fluent-emoji-flat:face-with-symbols-on-mouth",
	});
}

export default Component;
