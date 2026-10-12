import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qoynesbts.css';
import '../../css/j/jyuddqs9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qoynesbts"/><path class="jyuddqs9y"/></g>`,
		"fallback": "lucide-extended:eye-dashed-duotone",
	});
}

export default Component;
