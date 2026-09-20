import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pftvle2xc.css';
import '../../css/c/cxuk12djg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pftvle2xc"/><path class="cxuk12djg"/>`,
		"fallback": "octicon:feed-issue-open-16",
	});
}

export default Component;
