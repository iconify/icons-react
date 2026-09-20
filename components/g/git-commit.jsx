import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqraibc5g.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqraibc5g"/>`,
		"fallback": "octicon:git-commit",
	});
}

export default Component;
