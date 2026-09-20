import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zq8kg371w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zq8kg371w"/>`,
		"fallback": "tabler:fold-up",
	});
}

export default Component;
