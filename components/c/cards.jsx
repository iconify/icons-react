import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvuw72kws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvuw72kws"/>`,
		"fallback": "tabler:cards",
	});
}

export default Component;
