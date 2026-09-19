import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tl9p_ccsj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tl9p_ccsj"/>`,
		"fallback": "icons8:gender-neutral-user",
	});
}

export default Component;
