import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pozf4vevq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pozf4vevq"/>`,
		"fallback": "streamline-cyber:beach",
	});
}

export default Component;
