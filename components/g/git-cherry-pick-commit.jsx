import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/roe0f7pai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="roe0f7pai"/>`,
		"fallback": "iconoir:git-cherry-pick-commit",
	});
}

export default Component;
