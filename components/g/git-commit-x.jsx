import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a64j45bih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a64j45bih"/>`,
		"fallback": "noviair:git-commit-x",
	});
}

export default Component;
