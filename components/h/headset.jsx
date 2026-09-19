import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-i_fr00g.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-i_fr00g"/>`,
		"fallback": "fluent-mdl2:headset",
	});
}

export default Component;
