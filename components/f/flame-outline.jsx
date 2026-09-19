import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sg9nnwstw.css';
import '../../css/u/uz_ojxb6y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sg9nnwstw"/><path class="uz_ojxb6y"/>`,
		"fallback": "ion:flame-outline",
	});
}

export default Component;
