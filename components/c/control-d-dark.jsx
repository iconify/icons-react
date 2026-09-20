import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zae9-mbbq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zae9-mbbq"/>`,
		"fallback": "selfhst:control-d-dark",
	});
}

export default Component;
