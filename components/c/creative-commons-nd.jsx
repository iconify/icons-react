import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyt30g5bb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyt30g5bb"/>`,
		"fallback": "tabler:creative-commons-nd",
	});
}

export default Component;
