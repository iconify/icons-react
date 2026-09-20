import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejgmd2bvg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejgmd2bvg"/>`,
		"fallback": "selfhst:container-hub-light",
	});
}

export default Component;
