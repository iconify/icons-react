import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwd640c7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwd640c7q"/>`,
		"fallback": "tabler:brand-craft",
	});
}

export default Component;
