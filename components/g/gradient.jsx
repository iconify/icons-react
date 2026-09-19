import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjqd8pbho.css';
import '../../css/t/tgp27vi-y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjqd8pbho"/><path class="tgp27vi-y"/>`,
		"fallback": "carbon:gradient",
	});
}

export default Component;
