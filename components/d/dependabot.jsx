import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6gsloo-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6gsloo-x"/>`,
		"fallback": "thesvg-color:dependabot",
	});
}

export default Component;
