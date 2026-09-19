import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbiu97owb.css';
import '../../css/k/kti4eo0qw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbiu97owb"/><path class="kti4eo0qw"/>`,
		"fallback": "boxicons:campfire",
	});
}

export default Component;
