import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yz-efebcs.css';
import '../../css/n/n2j-lhblc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yz-efebcs"/><path class="n2j-lhblc"/>`,
		"fallback": "stash:explicit-content",
	});
}

export default Component;
