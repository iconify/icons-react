import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqn-dor0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqn-dor0t"/>`,
		"fallback": "reicon:grammerly-filled",
	});
}

export default Component;
