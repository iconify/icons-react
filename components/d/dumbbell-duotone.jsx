import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t74_ogbzo.css';
import '../../css/y/ykv4cf_5b.css';
import '../../css/g/gmorbsb7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t74_ogbzo"/><path class="ykv4cf_5b"/><path class="gmorbsb7g"/></g>`,
		"fallback": "lucide-extended:dumbbell-duotone",
	});
}

export default Component;
