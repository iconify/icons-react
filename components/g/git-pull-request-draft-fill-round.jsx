import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wx2kf4bcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wx2kf4bcr"/>`,
		"fallback": "coolicons:git-pull-request-draft-fill-round",
	});
}

export default Component;
