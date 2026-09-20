import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/g/g5r41j-rs.css';
import '../../css/t/ti-xclg9r.css';
import '../../css/s/sex64uljz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="g5r41j-rs"/><path class="ti-xclg9r"/><path class="sex64uljz"/></g>`,
		"fallback": "streamline:fastforward-clock",
	});
}

export default Component;
