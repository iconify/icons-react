import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j16d4ujcy.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j16d4ujcy"/>`,
		"fallback": "fluent-mdl2:format-painter",
	});
}

export default Component;
