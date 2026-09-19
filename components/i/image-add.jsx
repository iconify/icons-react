import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yibyn6bhe.css';
import '../../css/f/fxqkr7b2w.css';
import '../../css/v/viznwcc0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yibyn6bhe"/><path class="fxqkr7b2w"/><path class="viznwcc0i"/>`,
		"fallback": "bx:image-add",
	});
}

export default Component;
