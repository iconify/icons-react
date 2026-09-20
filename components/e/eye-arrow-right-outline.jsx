import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqc5o4bpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqc5o4bpj"/>`,
		"fallback": "mdi:eye-arrow-right-outline",
	});
}

export default Component;
