import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tl1cx0q2x.css';
import '../../css/k/krg4_wbge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tl1cx0q2x wm-k"/><path class="krg4_wbge wm-a"/>`,
		"fallback": "withicons-bauhaus:bookmark-plus",
	});
}

export default Component;
