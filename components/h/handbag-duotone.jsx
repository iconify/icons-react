import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fou47mbcj.css';
import '../../css/b/b5waxcbqh.css';
import '../../css/l/lhnd22-7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fou47mbcj"/><path class="b5waxcbqh"/><path class="lhnd22-7k"/></g>`,
		"fallback": "lucide-extended:handbag-duotone",
	});
}

export default Component;
