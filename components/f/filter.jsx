import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvd164trn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvd164trn"/>`,
		"fallback": "meteor-icons:filter",
	});
}

export default Component;
