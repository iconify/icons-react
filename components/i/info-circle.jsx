import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gn2jjfs2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gn2jjfs2h"/>`,
		"fallback": "majesticons:info-circle",
	});
}

export default Component;
