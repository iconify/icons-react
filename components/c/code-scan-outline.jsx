import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_1rmspdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b_1rmspdg"/>`,
		"fallback": "solar:code-scan-outline",
	});
}

export default Component;
