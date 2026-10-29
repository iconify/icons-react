import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/s4i2_ccew.css';
import '../../css/b/bs62-x9zy.css';
import '../../css/v/viuglgbwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="s4i2_ccew"/><path class="bs62-x9zy"/><path class="viuglgbwo"/></g>`,
		"fallback": "withicons-bauhaus:book-open-check",
	});
}

export default Component;
