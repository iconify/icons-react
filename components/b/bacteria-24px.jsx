import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zuf32_b3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zuf32_b3j"/>`,
		"fallback": "healthicons:bacteria-24px",
	});
}

export default Component;
