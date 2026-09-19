import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhnstcuom.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhnstcuom"/>`,
		"fallback": "codicon:git-commit",
	});
}

export default Component;
