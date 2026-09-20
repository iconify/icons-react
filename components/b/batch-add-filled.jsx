import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drqgfb63j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="drqgfb63j"/>`,
		"fallback": "lsicon:batch-add-filled",
	});
}

export default Component;
