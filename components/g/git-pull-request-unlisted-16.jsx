import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pztiz2epx.css';
import '../../css/u/ur-nm2blr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pztiz2epx"/><path class="ur-nm2blr"/>`,
		"fallback": "octicon:git-pull-request-unlisted-16",
	});
}

export default Component;
