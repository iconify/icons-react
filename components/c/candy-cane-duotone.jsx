import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bu0idk23e.css';
import '../../css/g/g0ioombmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bu0idk23e"/><path class="g0ioombmj"/></g>`,
		"fallback": "lucide-extended:candy-cane-duotone",
	});
}

export default Component;
