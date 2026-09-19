import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f4hm7m_rz.css';
import '../../css/h/heegwbb3r.css';
import '../../css/z/zv8mbzzst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f4hm7m_rz"/><path clip-rule="evenodd" class="heegwbb3r"/><path class="zv8mbzzst"/></g>`,
		"fallback": "flowbite:award-solid",
	});
}

export default Component;
