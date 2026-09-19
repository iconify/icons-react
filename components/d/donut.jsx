import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt9eulz_o.css';
import '../../css/o/o0m5y054f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt9eulz_o"/><path class="o0m5y054f"/>`,
		"fallback": "boxicons:donut",
	});
}

export default Component;
