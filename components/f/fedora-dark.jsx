import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9p9ndbto.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9p9ndbto"/>`,
		"fallback": "selfhst:fedora-dark",
	});
}

export default Component;
