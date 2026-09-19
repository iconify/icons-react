import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3mj2fbxp.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3mj2fbxp"/>`,
		"fallback": "fluent-mdl2:chevron-down-small",
	});
}

export default Component;
