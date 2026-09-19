import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okid9rbpc.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okid9rbpc"/>`,
		"fallback": "dinkie-icons:bezier-small",
	});
}

export default Component;
