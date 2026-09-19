import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kti4eo0qw.css';
import '../../css/n/n7mu1nbgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kti4eo0qw"/><path class="n7mu1nbgn"/>`,
		"fallback": "boxicons:campfire-filled",
	});
}

export default Component;
