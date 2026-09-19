import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzkckjaxf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzkckjaxf"/>`,
		"fallback": "bi:file-earmark-post-fill",
	});
}

export default Component;
