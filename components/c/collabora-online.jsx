import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/br-3rw75n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="br-3rw75n"/>`,
		"fallback": "thesvg:collabora-online",
	});
}

export default Component;
