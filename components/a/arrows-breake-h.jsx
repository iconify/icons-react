import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxnslnd9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxnslnd9k"/>`,
		"fallback": "gg:arrows-breake-h",
	});
}

export default Component;
