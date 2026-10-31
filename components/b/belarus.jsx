import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flmdk8oav.css';
import '../../css/t/t-h0v1sjr.css';
import '../../css/a/ajt2cbbjj.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flmdk8oav"/><path class="t-h0v1sjr"/><path class="ajt2cbbjj"/>`,
		"fallback": "tabler-flags:belarus",
	});
}

export default Component;
