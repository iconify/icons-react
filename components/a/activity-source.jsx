import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8--ehbye.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8--ehbye"/>`,
		"fallback": "icon-park-outline:activity-source",
	});
}

export default Component;
