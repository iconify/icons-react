import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a1qcafbod.css';
import '../../css/l/l659m6bhj.css';
import '../../css/z/z6-1y1f0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a1qcafbod"/><path class="l659m6bhj"/><path clip-rule="evenodd" class="z6-1y1f0s"/></g>`,
		"fallback": "lucide-extended:backpack-duotone",
	});
}

export default Component;
