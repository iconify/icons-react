import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/g/glzc1x51h.css';
import '../../css/a/acieqsbmw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="glzc1x51h"/><rect class="acieqsbmw"/></g>`,
		"fallback": "icon-park:children-cap",
	});
}

export default Component;
