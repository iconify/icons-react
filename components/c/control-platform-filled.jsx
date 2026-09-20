import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uk7i-3g6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uk7i-3g6g"/>`,
		"fallback": "tdesign:control-platform-filled",
	});
}

export default Component;
