import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrxr7g-mb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rrxr7g-mb"/>`,
		"fallback": "reicon:circle-arrow-left",
	});
}

export default Component;
