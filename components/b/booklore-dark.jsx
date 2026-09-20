import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gn203wbow.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gn203wbow"/>`,
		"fallback": "selfhst:booklore-dark",
	});
}

export default Component;
