import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epa5hnsth.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epa5hnsth"/>`,
		"fallback": "codicon:git-stash",
	});
}

export default Component;
