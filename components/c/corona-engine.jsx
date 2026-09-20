import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0hjt0kyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0hjt0kyw"/>`,
		"fallback": "thesvg-color:corona-engine",
	});
}

export default Component;
