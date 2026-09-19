import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5gbubc_q.css';
import '../../css/q/ql7ybibdx.css';
import '../../css/v/vfr8jsk1k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="m5gbubc_q"/><circle class="ql7ybibdx"/><path class="vfr8jsk1k"/>`,
		"fallback": "carbon:feature-typing",
	});
}

export default Component;
