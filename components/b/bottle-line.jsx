import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c59wd2bpx.css';
import '../../css/m/m6cog7b_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c59wd2bpx"/><path class="m6cog7b_t"/>`,
		"fallback": "mingcute:bottle-line",
	});
}

export default Component;
