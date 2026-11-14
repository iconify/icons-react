import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvg5mnb2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvg5mnb2w"/>`,
		"fallback": "hugeicons:folder-open",
	});
}

export default Component;
