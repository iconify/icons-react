import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lf7w_yagv.css';
import '../../css/c/c834y5bay.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lf7w_yagv"/><path class="c834y5bay"/>`,
		"fallback": "carbon:bus",
	});
}

export default Component;
