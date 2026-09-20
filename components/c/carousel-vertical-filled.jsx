import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9mopgb2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9mopgb2j"/>`,
		"fallback": "tabler:carousel-vertical-filled",
	});
}

export default Component;
