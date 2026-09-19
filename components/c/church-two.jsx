import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/e/ewveitspf.css';
import '../../css/a/a3x0wi1cq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="ewveitspf"/><path class="a3x0wi1cq"/></g>`,
		"fallback": "icon-park-outline:church-two",
	});
}

export default Component;
