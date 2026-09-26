import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/j6fms_bnd.css';
import '../../css/d/d787out6m.css';
import '../../css/r/rmhwmnbwp.css';
import '../../css/n/norr5njek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="j6fms_bnd"/><path class="d787out6m"/><path class="rmhwmnbwp"/><path class="norr5njek"/></g>`,
		"fallback": "solar:chevrons-up-down-line-duotone",
	});
}

export default Component;
