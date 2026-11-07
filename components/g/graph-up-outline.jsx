import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo7u7db2l.css';
import '../../css/t/t5k-_f5ou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eo7u7db2l"/><path clip-rule="evenodd" class="t5k-_f5ou"/>`,
		"fallback": "solar:graph-up-outline",
	});
}

export default Component;
