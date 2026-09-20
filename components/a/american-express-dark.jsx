import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0m-u9b4d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0m-u9b4d"/>`,
		"fallback": "selfhst:american-express-dark",
	});
}

export default Component;
