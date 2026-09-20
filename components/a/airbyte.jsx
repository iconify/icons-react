import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxfp7ac1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxfp7ac1x"/>`,
		"fallback": "thesvg-color:airbyte",
	});
}

export default Component;
