import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/no877j0-h.css';
import '../../css/z/ze7a6n2-t.css';
import '../../css/e/efkqgnb7v.css';
import '../../css/z/zhgmyyzqz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="no877j0-h"/><path class="ze7a6n2-t"/><path class="efkqgnb7v"/><path class="zhgmyyzqz"/></g>`,
		"fallback": "icon-park:clothes-short-sleeve",
	});
}

export default Component;
