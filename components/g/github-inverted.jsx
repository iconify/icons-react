import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc6-f2oia.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tc6-f2oia"/>`,
		"fallback": "codicon:github-inverted",
	});
}

export default Component;
