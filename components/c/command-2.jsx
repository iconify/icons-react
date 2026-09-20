import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qi2yjf4ye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qi2yjf4ye"/>`,
		"fallback": "streamline-cyber:command-2",
	});
}

export default Component;
