import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/ruhzymp4n.css';
import '../../css/c/cswty6bzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ruhzymp4n"/><path class="cswty6bzi"/></g>`,
		"fallback": "mage:battery-charging",
	});
}

export default Component;
