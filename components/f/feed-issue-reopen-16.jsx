import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsk7q2blk.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsk7q2blk"/>`,
		"fallback": "octicon:feed-issue-reopen-16",
	});
}

export default Component;
