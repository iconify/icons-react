import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljrxq48oh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljrxq48oh"/>`,
		"fallback": "cbi:friends-of-hue-senic",
	});
}

export default Component;
