import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snhrnq68r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snhrnq68r"/>`,
		"fallback": "selfhst:cookcli-light",
	});
}

export default Component;
