import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q64lebc_s.css';
import '../../css/k/kvlb9jb7n.css';
import '../../css/j/jcsum9_io.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q64lebc_s"/><path class="kvlb9jb7n"/><path class="jcsum9_io"/></g>`,
		"fallback": "lucide-extended:book-open-text-duotone",
	});
}

export default Component;
