import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbl3sx6_i.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbl3sx6_i"/>`,
		"fallback": "fluent-mdl2:external-git",
	});
}

export default Component;
