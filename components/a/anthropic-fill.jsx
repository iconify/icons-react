import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bu-yk1yjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bu-yk1yjf"/>`,
		"fallback": "ri:anthropic-fill",
	});
}

export default Component;
