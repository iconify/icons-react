import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugd4lfbtz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugd4lfbtz"/>`,
		"fallback": "codicon:git-stash-apply",
	});
}

export default Component;
