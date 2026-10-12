import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dd3gv08tx.css';
import '../../css/h/hk5zoibhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dd3gv08tx"/><path class="hk5zoibhi"/></g>`,
		"fallback": "lucide-extended:hourglass-duotone",
	});
}

export default Component;
