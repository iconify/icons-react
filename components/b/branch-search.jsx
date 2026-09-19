import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml21tub0j.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ml21tub0j"/>`,
		"fallback": "fluent-mdl2:branch-search",
	});
}

export default Component;
