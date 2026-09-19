import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uimoi1b4x.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uimoi1b4x"/>`,
		"fallback": "dinkie-icons:copies-small-filled",
	});
}

export default Component;
