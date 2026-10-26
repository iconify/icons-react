import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kk2qihvhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kk2qihvhg"/>`,
		"fallback": "healthicons:bone-outline-24px",
	});
}

export default Component;
