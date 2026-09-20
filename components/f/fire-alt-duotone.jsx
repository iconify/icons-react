import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ylyf4fbfa.css';
import '../../css/b/b_2_o9bod.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGh5D8Ybxs"><g class="ft5dv1b6b"><path class="ylyf4fbfa"/><path class="b_2_o9bod"/></g></mask></defs><path mask="url(#SVGh5D8Ybxs)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:fire-alt-duotone",
	});
}

export default Component;
