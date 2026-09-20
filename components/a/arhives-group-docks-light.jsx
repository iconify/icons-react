import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/c/cciu9be0h.css';
import '../../css/u/uygs5vd8s.css';
import '../../css/b/b6_2-wbpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="cciu9be0h"/><path class="uygs5vd8s"/><path class="b6_2-wbpu"/></g>`,
		"fallback": "lets-icons:arhives-group-docks-light",
	});
}

export default Component;
