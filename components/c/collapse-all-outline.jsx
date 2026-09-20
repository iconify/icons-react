import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zs39h7bpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zs39h7bpj"/>`,
		"fallback": "mdi:collapse-all-outline",
	});
}

export default Component;
