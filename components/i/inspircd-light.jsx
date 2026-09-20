import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5kyqgb-t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5kyqgb-t"/>`,
		"fallback": "selfhst:inspircd-light",
	});
}

export default Component;
