import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/no5pizbpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="no5pizbpq"/>`,
		"fallback": "solar:frame-outline",
	});
}

export default Component;
