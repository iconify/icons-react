import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v2hxvxboo.css';
import '../../css/u/u9wh36b8p.css';
import '../../css/f/fleaembio.css';
import '../../css/u/u5--a1zno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v2hxvxboo"/><path class="u9wh36b8p"/><path class="fleaembio"/><path class="u5--a1zno"/></g>`,
		"fallback": "lucide-extended:house-wifi-duotone",
	});
}

export default Component;
