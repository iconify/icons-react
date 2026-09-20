import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oe02l7sqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oe02l7sqi"/>`,
		"fallback": "reicon:exit-fullscreen-circle",
	});
}

export default Component;
