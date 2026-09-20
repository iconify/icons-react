import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dax8w86yt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dax8w86yt"/>`,
		"fallback": "octicon:chevron-up-24",
	});
}

export default Component;
