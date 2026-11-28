import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2uh0acfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2uh0acfm"/>`,
		"fallback": "iconaut:git-compare-solid",
	});
}

export default Component;
