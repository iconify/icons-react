import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md1w59b5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="md1w59b5r"/>`,
		"fallback": "tabler:ghost-filled",
	});
}

export default Component;
