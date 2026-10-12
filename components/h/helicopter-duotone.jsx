import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o4avq6bbw.css';
import '../../css/r/rbfuzcbwl.css';
import '../../css/j/jf8b9ilbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o4avq6bbw"/><path class="rbfuzcbwl"/><path class="jf8b9ilbx"/></g>`,
		"fallback": "lucide-extended:helicopter-duotone",
	});
}

export default Component;
