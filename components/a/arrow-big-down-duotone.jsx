import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rtkcq270j.css';
import '../../css/q/qscx2v7pg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rtkcq270j"/><path class="qscx2v7pg"/></g>`,
		"fallback": "lucide-extended:arrow-big-down-duotone",
	});
}

export default Component;
