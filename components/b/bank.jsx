import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kn6xy5bvw.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kn6xy5bvw"/>`,
		"fallback": "fluent-mdl2:bank",
	});
}

export default Component;
