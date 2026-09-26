import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/budom8kqj.css';
import '../../css/a/ae-aa10mx.css';
import '../../css/e/ez1x61b2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="budom8kqj"/><path class="ae-aa10mx"/><circle class="ez1x61b2a"/></g>`,
		"fallback": "lucide:house-cog",
	});
}

export default Component;
