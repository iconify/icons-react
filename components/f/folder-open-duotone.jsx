import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qthutmzac.css';
import '../../css/j/jmjyizb5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qthutmzac"/><path class="jmjyizb5w"/></g>`,
		"fallback": "lucide-extended:folder-open-duotone",
	});
}

export default Component;
