import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6kgg4c6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6kgg4c6i"/>`,
		"fallback": "reicon:arrow-up-right-filled",
	});
}

export default Component;
