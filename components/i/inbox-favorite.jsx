import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/avzyrmbmb.css';
import '../../css/d/dc7o45btu.css';
import '../../css/l/l4qf7ib8d.css';
import '../../css/t/tne6p7j6y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="avzyrmbmb"/><path class="dc7o45btu"/><path class="l4qf7ib8d"/><path class="tne6p7j6y"/></g>`,
		"fallback": "streamline-flex-color:inbox-favorite",
	});
}

export default Component;
