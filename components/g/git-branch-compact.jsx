import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuw8d-xuc.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuw8d-xuc"/>`,
		"fallback": "codicon:git-branch-compact",
	});
}

export default Component;
