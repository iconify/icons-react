import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evc3-36gu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evc3-36gu"/>`,
		"fallback": "octicon:feed-issue-draft-16",
	});
}

export default Component;
