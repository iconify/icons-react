import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s98hs_b6l.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s98hs_b6l"/>`,
		"fallback": "fluent-mdl2:entry-decline",
	});
}

export default Component;
