import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y2o-c2jyk.css';
import '../../css/d/dz3yt_p6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y2o-c2jyk"/><path class="dz3yt_p6b"/></g>`,
		"fallback": "lucide-extended:combine-duotone",
	});
}

export default Component;
