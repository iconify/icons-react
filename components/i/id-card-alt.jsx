import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/focov3bjk.css';

const viewBox = {"width":2368,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="focov3bjk"/>`,
		"fallback": "vs:id-card-alt",
	});
}

export default Component;
