import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gw6llof_t.css';
import '../../css/a/ax2a_u0ki.css';
import '../../css/d/di4tvaczb.css';
import '../../css/j/jdgij1_su.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gw6llof_t"/><path class="ax2a_u0ki"/><path class="di4tvaczb"/><path class="jdgij1_su"/></g>`,
		"fallback": "solar:chevrons-left-right-line-duotone",
	});
}

export default Component;
