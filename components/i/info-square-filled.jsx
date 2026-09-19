import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pas3bn7jn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pas3bn7jn"/>`,
		"fallback": "griddy-icons:info-square-filled",
	});
}

export default Component;
