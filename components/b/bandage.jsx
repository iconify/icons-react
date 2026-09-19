import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b04z-5r7l.css';
import '../../css/h/h848uabup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b04z-5r7l"/><path class="h848uabup"/>`,
		"fallback": "fontisto:bandage",
	});
}

export default Component;
