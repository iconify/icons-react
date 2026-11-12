import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osb188k-t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osb188k-t"/>`,
		"fallback": "selfhst:calibre-web-dark",
	});
}

export default Component;
