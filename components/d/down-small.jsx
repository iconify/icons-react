import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/meodg7r1v.css';
import '../../css/c/ck21i476d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="meodg7r1v"/><path class="ck21i476d"/></g>`,
		"fallback": "icon-park:down-small",
	});
}

export default Component;
