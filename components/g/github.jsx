import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isdc2k3ct.css';

const viewBox = {"width":1536,"height":1504};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isdc2k3ct"/>`,
		"fallback": "fa:github",
	});
}

export default Component;
