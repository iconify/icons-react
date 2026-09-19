import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3ss2_bla.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3ss2_bla"/>`,
		"fallback": "fluent-mdl2:check-list-check",
	});
}

export default Component;
