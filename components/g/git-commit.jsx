import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0cdwoxlc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0cdwoxlc"/>`,
		"fallback": "iconoir:git-commit",
	});
}

export default Component;
