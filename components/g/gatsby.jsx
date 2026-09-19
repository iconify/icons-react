import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulra56alq.css';
import '../../css/s/s3yqb5bmb.css';
import '../../css/q/qtquy_brk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ulra56alq"><path class="s3yqb5bmb"/><path class="qtquy_brk"/></g>`,
		"fallback": "catppuccin:gatsby",
	});
}

export default Component;
