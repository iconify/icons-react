import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkkp9mbcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkkp9mbcy"/>`,
		"fallback": "withicons:cupid-bow-gloss",
	});
}

export default Component;
