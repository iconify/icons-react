import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvs6eib7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvs6eib7p"/>`,
		"fallback": "thesvg-color:cocos",
	});
}

export default Component;
