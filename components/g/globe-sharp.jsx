import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfb5d6b_i.css';
import '../../css/b/bt4w0gb_w.css';
import '../../css/g/g40sm1q7e.css';
import '../../css/y/yf66grb3w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfb5d6b_i"/><path class="bt4w0gb_w"/><path class="g40sm1q7e"/><path class="yf66grb3w"/>`,
		"fallback": "famicons:globe-sharp",
	});
}

export default Component;
