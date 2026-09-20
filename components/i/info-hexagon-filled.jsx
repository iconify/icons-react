import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcnq08buw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcnq08buw"/>`,
		"fallback": "tabler:info-hexagon-filled",
	});
}

export default Component;
