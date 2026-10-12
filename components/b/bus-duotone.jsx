import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/osormye2v.css';
import '../../css/x/xo23v9bqf.css';
import '../../css/j/j9wettb5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="osormye2v"/><path class="xo23v9bqf"/><path class="j9wettb5s"/></g>`,
		"fallback": "lucide-extended:bus-duotone",
	});
}

export default Component;
