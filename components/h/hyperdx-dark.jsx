import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5riny98u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5riny98u"/>`,
		"fallback": "selfhst:hyperdx-dark",
	});
}

export default Component;
