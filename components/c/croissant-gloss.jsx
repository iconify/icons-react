import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dieu_wb3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dieu_wb3l wm-k"/>`,
		"fallback": "withicons:croissant-gloss",
	});
}

export default Component;
