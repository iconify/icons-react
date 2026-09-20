import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dnxn7vb-n.css';
import '../../css/c/c1g11sbqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dnxn7vb-n"/><path class="c1g11sbqq"/></g>`,
		"fallback": "reicon:chef-hat2-duotone",
	});
}

export default Component;
