import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ut64ajb2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ut64ajb2s"/>`,
		"fallback": "solar:inbox-archive-outline",
	});
}

export default Component;
