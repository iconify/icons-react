import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzn6ty5yb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dzn6ty5yb"/>`,
		"fallback": "reicon:fast-forward-circle-filled",
	});
}

export default Component;
