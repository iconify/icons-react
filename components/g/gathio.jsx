import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pojcwywxn.css';
import '../../css/n/nq7hwwb6d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pojcwywxn"/><path class="nq7hwwb6d"/>`,
		"fallback": "selfhst:gathio",
	});
}

export default Component;
