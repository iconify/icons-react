import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fe5902b0s.css';
import '../../css/b/b1gtpubpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fe5902b0s"/><path class="b1gtpubpo"/></g>`,
		"fallback": "lucide-extended:chess-bishop-duotone",
	});
}

export default Component;
