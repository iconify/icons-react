import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u90m3kb-a.css';
import '../../css/p/pzmtr-buq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u90m3kb-a"/><path clip-rule="evenodd" class="pzmtr-buq"/>`,
		"fallback": "solar:folder-down-outline",
	});
}

export default Component;
