import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sr5mygg-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sr5mygg-v"/>`,
		"fallback": "tabler:inner-shadow-bottom-right-filled",
	});
}

export default Component;
