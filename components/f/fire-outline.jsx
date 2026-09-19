import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnnwlwbti.css';
import '../../css/y/y4a8f1y-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lnnwlwbti"/><path clip-rule="evenodd" class="y4a8f1y-g"/>`,
		"fallback": "cuida:fire-outline",
	});
}

export default Component;
