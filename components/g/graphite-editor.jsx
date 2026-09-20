import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7542ra8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7542ra8w"/>`,
		"fallback": "simple-icons:graphite-editor",
	});
}

export default Component;
