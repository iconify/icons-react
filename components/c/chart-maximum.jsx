import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxkr6syzc.css';
import '../../css/o/o64mo7bjq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxkr6syzc"/><path class="o64mo7bjq"/>`,
		"fallback": "carbon:chart-maximum",
	});
}

export default Component;
