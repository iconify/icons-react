import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjp8s78ux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjp8s78ux"/>`,
		"fallback": "withicons:file-down-gloss",
	});
}

export default Component;
