import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flwcn99fi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flwcn99fi"/>`,
		"fallback": "selfhst:crowdsec-manager",
	});
}

export default Component;
