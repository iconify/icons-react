import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b55z__b5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b55z__b5a"/>`,
		"fallback": "cbi:dreamcast",
	});
}

export default Component;
