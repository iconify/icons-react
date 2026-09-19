import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/puzsmobar.css';
import '../../css/n/npj2p4b7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="puzsmobar"/><path clip-rule="evenodd" class="npj2p4b7q"/>`,
		"fallback": "bitcoin-icons:calendar-filled",
	});
}

export default Component;
