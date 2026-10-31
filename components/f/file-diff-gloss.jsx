import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbn83nkca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbn83nkca"/>`,
		"fallback": "withicons:file-diff-gloss",
	});
}

export default Component;
