import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkzr2r9mg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nkzr2r9mg"/>`,
		"fallback": "reicon:eye-off-filled",
	});
}

export default Component;
