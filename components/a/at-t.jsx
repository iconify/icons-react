import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxt9wpbyj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxt9wpbyj"/>`,
		"fallback": "selfhst:at-t",
	});
}

export default Component;
