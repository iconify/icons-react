import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm_tybc4k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lm_tybc4k"/>`,
		"fallback": "ooui:arrow-up",
	});
}

export default Component;
