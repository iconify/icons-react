import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g98dd5zxh.css';
import '../../css/e/evjd1k6-o.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g98dd5zxh"/><path class="evjd1k6-o"/>`,
		"fallback": "medical-icon:i-ultrasound",
	});
}

export default Component;
