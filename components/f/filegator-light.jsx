import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni6u1e5mh.css';
import '../../css/l/lktrzctrc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni6u1e5mh"/><path class="lktrzctrc"/>`,
		"fallback": "selfhst:filegator-light",
	});
}

export default Component;
