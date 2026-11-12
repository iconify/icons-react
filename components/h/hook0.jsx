import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzajeybua.css';
import '../../css/f/fcd9fub-m.css';
import '../../css/d/dd2zndbsg.css';
import '../../css/x/xukzidbcb.css';
import '../../css/t/tokuqsu-n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzajeybua"/><path class="fcd9fub-m"/><path class="dd2zndbsg"/><path class="xukzidbcb"/><path class="tokuqsu-n"/>`,
		"fallback": "selfhst:hook0",
	});
}

export default Component;
