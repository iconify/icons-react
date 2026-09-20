import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brwddz0uv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brwddz0uv"/>`,
		"fallback": "thesvg:ferretdb",
	});
}

export default Component;
