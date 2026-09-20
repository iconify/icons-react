import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za3etc0cq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="za3etc0cq"/>`,
		"fallback": "selfhst:affine-dark",
	});
}

export default Component;
