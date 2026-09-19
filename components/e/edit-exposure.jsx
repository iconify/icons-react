import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kv6e5ubox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kv6e5ubox"/>`,
		"fallback": "gg:edit-exposure",
	});
}

export default Component;
