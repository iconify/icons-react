import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uuyf9rb6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uuyf9rb6y"/>`,
		"fallback": "stash:hand-holding-dollar-light",
	});
}

export default Component;
