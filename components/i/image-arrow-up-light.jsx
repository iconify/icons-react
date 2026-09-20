import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r70_bowor.css';
import '../../css/j/j73_9_mpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r70_bowor"/><path class="j73_9_mpf"/>`,
		"fallback": "stash:image-arrow-up-light",
	});
}

export default Component;
