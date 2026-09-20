import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzot9ebny.css';
import '../../css/e/eexszhbnn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzot9ebny"/><path class="eexszhbnn"/>`,
		"fallback": "selfhst:chitchatter",
	});
}

export default Component;
