import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vx-ffrb6n.css';
import '../../css/d/dbt_h9efp.css';
import '../../css/l/lu3gphbdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vx-ffrb6n"/><path class="dbt_h9efp"/><path class="lu3gphbdq"/></g>`,
		"fallback": "tdesign:cloudy-rain",
	});
}

export default Component;
