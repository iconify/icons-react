import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uog1-9bzp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uog1-9bzp"/>`,
		"fallback": "selfhst:agregarr-dark",
	});
}

export default Component;
