import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wczcb9hcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wczcb9hcl"/>`,
		"fallback": "tabler:container-filled",
	});
}

export default Component;
