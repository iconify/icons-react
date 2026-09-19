import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvvcsfsvy.css';
import '../../css/t/ttnbi3byx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvvcsfsvy"/><path clip-rule="evenodd" class="ttnbi3byx"/>`,
		"fallback": "basil:battery-quarter-outline",
	});
}

export default Component;
