import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck_hy-bud.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck_hy-bud"/>`,
		"fallback": "memory:arrow-up-left-box",
	});
}

export default Component;
