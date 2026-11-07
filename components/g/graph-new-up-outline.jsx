import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj6z6-b0q.css';
import '../../css/p/p9-c1gbhj.css';
import '../../css/e/eo7u7db2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hj6z6-b0q"/><path clip-rule="evenodd" class="p9-c1gbhj"/><path class="eo7u7db2l"/>`,
		"fallback": "solar:graph-new-up-outline",
	});
}

export default Component;
