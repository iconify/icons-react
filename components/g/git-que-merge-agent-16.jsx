import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgej2kbwp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgej2kbwp"/>`,
		"fallback": "octicon:git-que-merge-agent-16",
	});
}

export default Component;
