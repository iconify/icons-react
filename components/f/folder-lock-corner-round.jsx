import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn2_ctb2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn2_ctb2t"/>`,
		"fallback": "coolicons:folder-lock-corner-round",
	});
}

export default Component;
