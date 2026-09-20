import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cnc09ip4l.css';
import '../../css/l/lr20g5wky.css';
import '../../css/s/shsxhtb2w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cnc09ip4l"/><path class="lr20g5wky"/><path class="shsxhtb2w"/></g>`,
		"fallback": "streamline-color:dressing-table",
	});
}

export default Component;
