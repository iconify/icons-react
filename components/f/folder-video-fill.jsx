import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umhuo09-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="umhuo09-p"/>`,
		"fallback": "iconamoon:folder-video-fill",
	});
}

export default Component;
