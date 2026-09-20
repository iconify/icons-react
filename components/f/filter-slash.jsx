import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s42005nyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s42005nyw"/>`,
		"fallback": "prime:filter-slash",
	});
}

export default Component;
