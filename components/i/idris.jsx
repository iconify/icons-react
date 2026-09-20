import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9xtyybbm.css';
import '../../css/a/alxwr1l7c.css';
import '../../css/x/xn7sace2l.css';

const viewBox = {"width":200,"height":200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="v9xtyybbm"><path class="alxwr1l7c"/><path class="xn7sace2l"/></g>`,
		"fallback": "material-icon-theme:idris",
	});
}

export default Component;
