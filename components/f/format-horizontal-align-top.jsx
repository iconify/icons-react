import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2itiivcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2itiivcy"/>`,
		"fallback": "tdesign:format-horizontal-align-top",
	});
}

export default Component;
