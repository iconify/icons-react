import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txpzpubtg.css';

const viewBox = {"width":562,"height":881};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txpzpubtg"/>`,
		"fallback": "ls:g",
	});
}

export default Component;
