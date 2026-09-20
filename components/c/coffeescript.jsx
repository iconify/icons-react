import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok9iejw6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ok9iejw6g"/>`,
		"fallback": "simple-icons:coffeescript",
	});
}

export default Component;
