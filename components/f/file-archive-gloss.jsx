import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkvl1_a7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkvl1_a7w"/>`,
		"fallback": "withicons:file-archive-gloss",
	});
}

export default Component;
