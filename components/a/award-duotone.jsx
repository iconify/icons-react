import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z3bjef6ae.css';
import '../../css/o/o58l7acvc.css';
import '../../css/t/tupglrb1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z3bjef6ae"/><path class="o58l7acvc"/><path class="tupglrb1i"/></g>`,
		"fallback": "lucide-extended:award-duotone",
	});
}

export default Component;
