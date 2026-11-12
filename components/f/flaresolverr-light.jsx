import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajqs_4b9f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajqs_4b9f"/>`,
		"fallback": "selfhst:flaresolverr-light",
	});
}

export default Component;
