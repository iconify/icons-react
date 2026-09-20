import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlzij9bft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlzij9bft"/>`,
		"fallback": "tabler:hammer",
	});
}

export default Component;
