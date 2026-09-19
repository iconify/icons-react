import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkbn97b3r.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkbn97b3r"/>`,
		"fallback": "fluent-mdl2:branch-commit",
	});
}

export default Component;
