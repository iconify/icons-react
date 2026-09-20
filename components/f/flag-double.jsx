import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ao9_rtb7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ao9_rtb7p"/>`,
		"fallback": "streamline-cyber:flag-double",
	});
}

export default Component;
