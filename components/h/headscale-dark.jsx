import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehnhu9bov.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehnhu9bov"/>`,
		"fallback": "selfhst:headscale-dark",
	});
}

export default Component;
