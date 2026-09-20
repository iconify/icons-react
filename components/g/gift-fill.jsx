import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrt_g7bic.css';
import '../../css/r/rzcm8fagf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zrt_g7bic"/><path class="rzcm8fagf"/>`,
		"fallback": "lets-icons:gift-fill",
	});
}

export default Component;
