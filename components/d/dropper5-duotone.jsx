import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o5z4ltqup.css';
import '../../css/d/d1qaxsbgu.css';
import '../../css/n/np38syb9b.css';
import '../../css/m/m61b3ybru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o5z4ltqup"/><path class="d1qaxsbgu"/><path clip-rule="evenodd" class="np38syb9b"/><path class="m61b3ybru"/></g>`,
		"fallback": "reicon:dropper5-duotone",
	});
}

export default Component;
