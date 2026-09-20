import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y279e5bdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y279e5bdo"/>`,
		"fallback": "tabler:click-filled",
	});
}

export default Component;
