import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-yolg93x.css';
import '../../css/x/x_6no5bff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-yolg93x"/><path class="x_6no5bff"/>`,
		"fallback": "boxicons:door-open",
	});
}

export default Component;
