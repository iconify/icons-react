import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/du4_nruej.css';
import '../../css/h/hz-4tgb0k.css';
import '../../css/k/km5264l9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="du4_nruej"/><path class="hz-4tgb0k"/><path class="km5264l9n"/></g>`,
		"fallback": "mage:archive-drawer",
	});
}

export default Component;
