import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezzg8ab2o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezzg8ab2o"/>`,
		"fallback": "selfhst:headlamp-light",
	});
}

export default Component;
