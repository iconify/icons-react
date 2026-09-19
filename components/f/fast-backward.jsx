import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zs66_p_pp.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zs66_p_pp"/>`,
		"fallback": "fa7-solid:fast-backward",
	});
}

export default Component;
